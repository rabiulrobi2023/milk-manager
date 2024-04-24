import moment from "moment";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

import useAxiosGeneral from "../../hooks/useAxiosGeneral";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCurrentUserFromDB from "../../hooks/useCurrentUserFromDB";

const Sell = () => {
    const axiosGeneral = useAxiosGeneral()
    const { currentUserInDB, refetch, isLoading } = useCurrentUserFromDB()
    const currentDate = moment().format("YYYY-MM-DD")
    const navigate = useNavigate()

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
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const sellAmount = data.sellAmount
        const price = (sellAmount * presentRate).toFixed(2)
        const sellInfo = {
            sellerName: currentUserInDB.name,
            sellerEmail: currentUserInDB.email,
            ie: "import",
            sellingDate: moment(data.sellDate).format("YYYY-MM-DD"),
            reportingDate: currentDate,
            soldAmount: sellAmount,
            rate: presentRate,
            price: price
        }
        console.log(sellInfo)

        Swal.fire({
            html: `<div class=text-left text-[10px]>
                <p class="font-bold text-left">Date: ${moment(data.sellDate).format("DD-MMM-YYYY")}</p>
                <p>Amount: ${sellAmount} Litter</p>
                <p>Rate: ${presentRate} TK/LTR</p>
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
                cancelButtonColor: "w-[80px]",
                confirmButton: "w-[90px] text-center",
                popup: "text-[10px] md:ml-[200px] ",
                html: "text-left",

            }
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosGeneral.post("/imports", sellInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Sell successful",
                                    showConfirmButton: false,
                                    width: "280px",
                                    timer: 3000,
                                    customClass: {
                                        title: 'text-[20px] text-green-600',
                                        icon: 'text-[12px]',
                                        popup: 'text-gray-600 text-sm pt-0 ml-[200px]',

                                    }
                                });
                                navigate("/dashboard")

                            }
                        })
                }
            });

    }

    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-100px)] text-gray-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-[280px] md:w-[400px] mx-auto border-2 p-10 rounded-md">
                    <p className="text-center font-bold text-lg">Sell Milk</p>
                    <div className="flex justify-center h-20">
                        <img src="https://i.ibb.co/ss6sT09/milk-glass2.png" alt="" className="h-full w-auto" />
                    </div>
                    <div className="flex flex-col">
                        <label>Sell Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="sellDate"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            slot=".5"
                            defaultValue={currentDate}
                            {...register("sellDate", {
                                required: "Date is required",
                                validate: value =>
                                    value <= currentDate || "The selected date must the present date or a date before the present date."

                            })}
                        />
                        {
                            errors.sellDate && (<p role="alert" className="text-red-600">{errors.sellDate.message}</p>)
                        }

                    </div>

                    <div className="flex flex-col">
                        <label>Amount<span className="text-red-500">*</span></label>
                        <input
                            name="sellAmount"
                            type="number"
                            min="0.5"
                            step=".25"
                            placeholder="Enter Amount in Litter"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            {...register("sellAmount", {
                                required: true
                            })}

                        />
                        {errors.sellAmount?.type === "required" && (
                            <p role="alert" className="text-red-600">Amount is required</p>
                        )}

                    </div>

                    <div className="">
                        <input type="submit" className="bg-colorBase mt-3 w-full py-1 font-bold rounded-sm hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Sell;