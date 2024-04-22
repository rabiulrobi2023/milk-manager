import moment from "moment";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";



const BuyMilk = () => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const currentDate = moment().format("DD-MMM-YYYY");
    const [purDateError, setPurDateError] = useState()

    const onSubmit = (data) => {
        setPurDateError("")
        const inputPurDate = moment(data.purDate).format("DD-MMM-YYYY");
        if (inputPurDate > currentDate) {
            setPurDateError("Your selected date must be current date or any previous date")
            return;
        }

        if (inputPurDate == "") {
            setPurDateError("")
        }
        alert("Successfull")
        reset()
    }

    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-100px)] text-gray-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-[280px] md:w-[400px] mx-auto shadow-md p-6 rounded-md">
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

                            {...register("purDate", {
                                required: true,
                                valueAsDate: "13-Apr-2024"
                            })}
                        />
                        {/* {errors.purDate?.type === "required" && (
                            <p role="alert" className="text-red-600">Date is required</p>
                        )} */}

                        {
                            purDateError ?
                                <p className="text-red-600 text-sm">{purDateError}</p> : ""
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
                                required: true
                            })}
                        />
                        {errors.purAmount?.type === "required" && (
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

export default BuyMilk;