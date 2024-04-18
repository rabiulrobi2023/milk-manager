import moment from "moment";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const [seePass, setSeePass] = useState(false)

    const handleSeePassword = () => {
        setSeePass(!seePass)
    }
    console.log(seePass)

    const onSubmit = (data) => {
        alert("Successfull")
        reset()
    }
    return (
        <div className="mx-auto flex justify-center items-center h-screen text-gray-700  ">
            <form  onSubmit={handleSubmit(onSubmit) } className="bg-[#0707070c]">
                <div className="flex flex-col gap-3 w-[calc(100vw-60px)] md:w-[350px] mx-auto shadow-lg shadow-stone-200 p-6 rounded-md bg-[url(https://i.ibb.co/sJ74JtY/milk-icon2.png)] bg-no-repeat bg-center bg-blend-lighten  ">

                    <p className="text-center font-bold text-2xl"><span className="text-colorHighLight">Milk</span> Management</p>
                    <p className="text-center font-bold text-2xl">Login</p>

                    <div className="flex flex-col">
                        <label className="font-bold">Email<span className="text-red-500">*</span></label>
                        <input type="email"
                            name="email"
                            className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77]"
                            placeholder="Enter Your Valid Email"
                            {...register("email", {
                                required: true
                            })}
                        />
                        {errors.email?.type === "required" && (
                            <p role="alert" className="text-red-600 text-sm">Email is required</p>
                        )}
                    </div>


                    <div className="flex flex-col">
                        <label className="font-bold">Passowrd<span className="text-red-500">*</span></label>
                        <div className="flex items-center relative">
                            <input
                                name="password"
                                type={seePass ? "text" : "password"}
                                minLength="4"
                                placeholder="Enter Your Password"
                                className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77] w-full"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            <button type="button" onClick={handleSeePassword} className="absolute right-2">
                                {
                                    seePass ? <IoEyeOutline className="text-xl"></IoEyeOutline> : <GoEyeClosed className="text-xl"></GoEyeClosed>
                                }
                            </button>
                        </div>
                        {errors.password?.type === "required" && (
                            <p role="alert" className="text-red-600 text-sm">Password is required</p>
                        )}

                    </div>

                    <div className="">
                        <input type="submit" value="Login" className="bg-[#f8e74d5e] border-[1px] mt-3 w-full py-1 font-bold rounded-sm  hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                    <p className="text-sm text-center">Don't have an account? <span className="text-blue-600 font-bold"><Link to="/sign-up">Sign Up</Link></span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;