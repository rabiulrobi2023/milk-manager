import moment from "moment";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";


const Pay = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const currentDate = moment().format("DD-MMM-YYYY");
    const [payDateError, setPayDateError] = useState()

    const onSubmit = (data) => {
        setPayDateError("")
        const inputPayDate = moment(data.payDate).format("DD-MMM-YYYY");
        console.log(inputPayDate)
        if (inputPayDate > currentDate) {
            setPayDateError("Your selected date must be current date or any previous date")
            return;
        }

        if (inputPayDate == "") {
            setPayDateError("")
        }
        alert("Successfull")
        reset()
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
                        <label>Payment Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="payDate"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            slot=".5"

                            {...register("payDate", {
                                required: true,
                                valueAsDate: "13-Apr-2024"
                            })}
                        />
                        {/* {errors.payDate?.type === "required" && (
                            <p role="alert" className="text-red-600">Date is required</p>
                        )} */}

                        {
                            payDateError ?
                                <p className="text-red-600 text-sm">{payDateError}</p> : ""
                        }

                    </div>

                    <div className="flex flex-col">
                        <label>Amount<span className="text-red-500">*</span></label>
                        <input
                            name="payAmount"
                            type="number"
                            min="5"
                            step="1"
                            placeholder="Enter Amount in TK"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            {...register("payAmount", {
                                required: true
                            })}
                        />
                        {errors.payAmount?.type === "required" && (
                            <p role="alert" className="text-red-600">Amount is required</p>
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

export default Pay;