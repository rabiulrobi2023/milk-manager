import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCurrentUserFromDB from "../../hooks/useCurrentUserFromDB";
import useStock from "../../hooks/useStok";



const BuyMilk = () => {
    const axiosGeneral = useAxiosGeneral()
    const { currentUserInDB, refetch} = useCurrentUserFromDB()
    const currentDate = moment().format("YYYY-MM-DD");
    const navigate = useNavigate()
    const { stock } = useStock()

    const stockInt = parseFloat(stock)
  

    const { data: rate } = useQuery({
        queryKey: ["rate"],
        queryFn: async () => {
            const res = await axiosGeneral("/rates")
            return res.data
        }
    })
    const presentRate = parseFloat(rate?.newRate).toFixed(2);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const purAmount = data.purAmount
        const price = (purAmount * presentRate).toFixed(2)
        const buyingInfo = {
            buyerName: currentUserInDB.name,
            buyerEmail: currentUserInDB.email,
            ie: "export",
            buyingDate: moment(data.purDate).format("YYYY-MM-DD"),
            reportingDate: currentDate,
            buyingAmount: purAmount,
            rate: presentRate,
            price: price
        }
        console.log(buyingInfo)

        Swal.fire({
            html: `<div class=text-left>
                <p class="font-bold text-left">Date: ${moment(data.purDate).format("DD-MMM-YYYY")}</p>
                <p>Amount: ${purAmount} Litter</p>
                <p>Rate: ${presentRate} TK</p>
                <p>Total: ${price} TK</p>
   
            </div>`,

            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonColor: "#168a40",
            confirmButtonColor: "#eb4654",
            background: "white",
            padding: "10px",
            width: "280px",

            customClass: {
                cancelButtonColor: "w-[90px] text-center",
                confirmButton: "w-[90px]",
                popup: "text-[14px] md:ml-[200px] align-left ",
                html: "text-left",

            }
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosGeneral.post("/exports", buyingInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                refetch()
                                Swal.fire({
                                    icon: "success",
                                    title: "Purches successfull",
                                    showConfirmButton: false,
                                    width: "280px",
                                    timer: 3000,
                                    customClass: {
                                        title: 'text-[10px] text-green-600',
                                        icon: 'text-[12px]',
                                        popup: 'text-gray-600 text-sm pt-0 md:ml-[200px] text-[11px]',
                                    }
                                });
                                navigate("/dashboard")
                                window.location.reload()
                            }
                        })
                }
            });
    }

    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-100px)] text-gray-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-[280px] md:w-[400px] mx-auto border-2 p-10 rounded-md bg-opacity-40 bg-yell ">
                    <p className="text-center font-bold text-lg">Buy Milk</p>
                    <div className="flex justify-center h-20">
                        <img src="https://i.ibb.co/ss6sT09/milk-glass2.png" alt="" className="h-full w-auto" />
                    </div>
                    <div className="flex flex-col">
                        <label>Purchased Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="purDate"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            slot=".5"
                            defaultValue={moment().format("YYYY-MM-DD")}
                            {...register("purDate", {
                                required: "Date is required",
                                validate: value =>
                                    value <= currentDate || "The selected date must the present date or a date before the present date."

                            })}
                        />
                        {
                            errors.purDate && (<p role="alert" className="text-red-600">{errors.purDate.message}</p>)
                        }

                    </div>

                    <div className="flex flex-col">
                        <label>Amount<span className="text-red-500">*</span></label>
                        <input
                            name="purAmount"
                            type="number"
                            min="0.5"
                            step=".25"
                            placeholder="Enter Amount in Litter"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            {...register("purAmount", {
                                required: "Amount is required",
                                validate: {
                                    stockValidte: value => value <= stockInt || "Unavailable Stock",
                                    zeroValidate: value => value > 0 || "Amount must be greater than zero"
                                }
                            })}
                        />
                        {errors.purAmount && (<p role="alert" className="text-red-600">{errors.purAmount.message}</p>)}

                    </div>

                    <div className="">
                        <input type="submit" className="bg-colorBase mt-3 w-full py-1 font-bold rounded-sm hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BuyMilk;