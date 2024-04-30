import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";
import { query } from "firebase/database";
import { key } from "localforage";
import useAdminInfo from "../../hooks/useAdminInfo";
import useCurrentUserFromDB from "../../hooks/useCurrentUserFromDB";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const PaymentFromBuyer = () => {
    const axiosGeneral = useAxiosGeneral()
    const adminInfo = useAdminInfo()
    const { currentUserInDB } = useCurrentUserFromDB()
    const navigate = useNavigate()
    // console.log(adminInfo)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const nowDate = moment().format("YYYY-MM-DD");



    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ["sellerList"],
        queryFn: async () => {
            const res = await axiosGeneral.get("/seller", {
                params: {
                    type: "seller"
                }

            })
            return res.data
        }

    })






    const onSubmit = (data) => {
        const receiver = JSON.parse(data.receiver)
        const receiverRole= receiver.role === "admin" ? "manager" : "seller"
        const paymentInfo = {
            receiverName: receiver.name,
            receiverEmail: receiver.email,
            receiverRole: receiverRole,
            payerName: currentUserInDB.name,
            payerEmail: currentUserInDB.email,
            paymentDate: data.payDate,
            paymentAmount: data.amount,
            reportingDate: nowDate,
            status: "pending",
            payerRole:"buyer",
            rejected:"no"
        }

        console.log(paymentInfo)

        Swal.fire({
            html: `<div class=text-left>
                <p class="font-bold text-left">Date: ${moment(data.payDate).format("DD-MMM-YYYY")}</p>
                <p>To: ${receiverRole}-${paymentInfo.receiverName}</p>
                <p>Email: ${paymentInfo.receiverEmail} </p>
                <p>Amount: ${paymentInfo.paymentAmount} TK </p>
               
            </div>`,

            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonColor: "#168a40",
            confirmButtonColor: "#eb4654",
            background: "white",
            padding: "5px",
            width: "300px",

            customClass: {
                cancelButtonColor: "w-[90px] text-center",
                confirmButton: "w-[90px]",
                popup: "text-sm md:ml-[200px] align-left ",
                html: "text-left text-sm",

            }
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosGeneral.post("/payments", paymentInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                refetch()
                                Swal.fire({
                                    icon: "success",
                                    title: "Payment successfull",
                                    text:"Please wait for approval",
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
                              
                            }
                        })
                }
            });






    }
    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-100px)] text-gray-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-[280px] md:w-[400px] mx-auto shadow-md p-6 rounded-md">
                    <p className="text-center font-bold text-xl"><span className="text-3xl text-red-400">P</span>ayment</p>
                    <div className="flex justify-center h-20">
                        <img src="https://i.ibb.co/PzWBXMn/payment.png" alt="" className="h-full w-auto" />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Pay To<span className="text-red-500">*</span></label>
                        <select
                            name="receiver"

                            className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77]"
                            {...register("receiver", {
                                required: "This field is required",

                            })}
                        >
                            <option value="" disabled selected className="text-gray-600">Select Receiver</option>
                            {
                                currentUserInDB?.role == "admin" ? ""
                                    :
                                    <option value={JSON.stringify(adminInfo)}>Manager- {adminInfo?.name}</option>
                            }
                            {
                                sellers?.map((seller) => (
                                    <option key={seller._id} value={JSON.stringify(seller)}>Seller- {seller.name}</option>
                                ))
                            }
                        </select>
                        {errors.receiver && (<p role="alert" className="text-red-600 text-sm">{errors.receiver.message}</p>)}
                    </div>


                    <div className="flex flex-col">
                        <label>Payment Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="payDate"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            slot=".5"

                            {...register("payDate", {
                                required: "Date is required",
                                validate: rule => rule <= nowDate || "The selected date must the present date or a date before the present date"
                            })}
                        />
                        {
                            errors.payDate && (<p role="alert" className="text-red-600 text-sm">{errors.payDate.message}</p>)
                        }


                    </div>

                    <div className="flex flex-col">
                        <label>Amount<span className="text-red-500">*</span></label>
                        <input
                            name="amount"
                            type="number"
                      
                            step="1"
                            placeholder="Enter Amount in TK"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            {...register("amount", {
                                required: "Amount is required",
                                validate: rule=>rule>=5 || "Minimum amount 5.00 TK"
                            })}
                        />
                        {errors.amount  && (
                            <p role="alert " className="text-red-600 text-sm">{errors.amount.message}</p>
                        )}

                    </div>

                    <div className="">
                        <input type="submit" value="Pay" className="bg-colorBase mt-3 w-full py-1 font-bold rounded-sm  hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentFromBuyer;