import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { FcCalendar } from "react-icons/fc";
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>


const BuyMilk = () => {
    const [purDate, setPurDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div className="mx-auto flex justify-center items-center h-[calc(100vh-200px)] text-gray-600 ">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5 w-[280px] md:w-[400px] mx-auto shadow-md p-6 rounded-md">
                    <p className="text-center font-bold text-lg">Buy Milk</p>
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/FhHXYHR/milk-bottol.png" alt="" className="h-[200px] w-auto" />
                    </div>

                    {/* <div className="">
                        <label htmlFor="purDate">Purchased Date<span className="text-red-500">*</span></label>
                        <div className=" mx-auto static w-[280px]">
                            <Controller
                                name="purDate"
                                control={control}
                                defaultValue={null}
                                rules={{ required: true }}
                                render={({ field }) => (   
                                        <DatePicker
                                            {...field}
                                            selected={purDate}
                                            onChange={(date) => {
                                                setPurDate(date);
                                                field.onChange(date);
                                            }}
                                            maxDate={new Date()}
                                            className="border-[1px] hover:none bg-transparent px-2 py-1 w-[280px]"
                                            dateFormat="dd-MMM-yyyy"
                                        />
                                )}
                                
                            />
                              <FcCalendar className="text-2xl absolute right-0 top-0"></FcCalendar>
                        </div>


                    </div> */}

                    <div className="flex flex-col">
                        <label>Purchased Date<span className="text-red-500">*</span></label>
                        <input type="date"
                            name="purDate"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            slot=".5"

                            {...register("purDate")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Amount<span className="text-red-500">*</span></label>
                        <input
                            name="purAmount"
                            type="number"
                            min="0.5"
                            slot="0.5"
                            placeholder="Enter Amount in Litter"
                            className="border-[1px]  px-2 py-1 rounded-sm"
                            {...register("purAmount")}
                        />

                    </div>

                    <div className="">
                        <input type="submit" className="bg-baseColor mt-3 w-full py-1 font-bold rounded-sm hover:bg-btnHoverBase cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BuyMilk;