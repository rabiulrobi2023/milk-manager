import moment from "moment";
import { useContext, useState } from "react";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";


const Rate = () => {
     const axiosGeneral = useAxiosGeneral()
     const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const currentDate = moment().format("YYYY-MM-DD");

    const onSubmit = (data) => {

        const info = {
            rateDate: data.rateDate,
            newRate: data.newRate
        }
      
        Swal.fire({
            html: `<div><p>${currentDate }</p><p>Hello</p></div>`,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonColor: "#168a40",
            confirmButtonColor: "#eb4654",
            background: "white",
            padding: "10px",
            width: "280px",
            customClass: {
                cancelButtonColor: "w-[60px]",
                confirmButton: "w-[60px]",
                popup: "text-[14px]",
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosGeneral.post("/rates",info)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Rate change successfull",
                                showConfirmButton: false,
                                width: "280px",
                                timer: 3000,
                                customClass: {
                                    title: 'text-[20px] text-green-600',
                                    icon: 'text-[12px]',
                                    popup: 'text-gray-600 text-sm pt-0',
                                }
                            });
                            navigate("/dashboard")

                        }
                    })
            }
        });



        reset()
    }
    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-100px)] text-gray-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-[280px] md:w-[400px] mx-auto rounded-md p-6  bg-white border-2">
                    <p className="text-center font-bold text-xl"><span className="text-red-400">Rate </span>Change</p>

                    <div className="flex flex-col">
                        <label>Effective Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="rateDate"
                            className="border-[1px]  px-2 py-1 rounded-sm focus:outline-none"
                            slot=".5"
                           

                            defaultValue={moment().format("YYYY-MM-DD")}

                            {...register("rateDate", {
                                required: "Date is Reqired",
                                validate: value =>
                                    value <= moment().format("YYYY-MM-DD") || "The selected date should be the present date or a date before the present date."
                            })}
                        />
                        {errors.rateDate && (
                            <p role="alert" className="text-red-600">{errors.rateDate.message}</p>
                        )}

                    </div>

                    <div className="flex flex-col">
                        <label>New Rate<span className="text-red-500">*</span></label>
                        <input
                            name="newRate"
                            type="number"
                            min="1"
                            step="0.01"
                            placeholder="Enter New Rate in BDT"
                            className="border-[1px]  px-2 py-1 rounded-sm focus:outline-none"
                            {...register("newRate", {
                                required: true
                            })}
                        />
                        {errors.newRate?.type === "required" && (
                            <p role="alert" className="text-red-600">New Rate Required</p>
                        )}

                    </div>
                    <div className="">
                        <input type="submit" value="Submit" className="bg-colorBase mt-3 w-full py-1 font-bold rounded-sm  hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Rate;