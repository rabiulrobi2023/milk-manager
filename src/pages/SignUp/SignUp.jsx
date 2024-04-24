
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";


const SignUp = () => {
    const axiosGeneral = useAxiosGeneral()
    const navigate= useNavigate()
 

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [seePass, setSeePass] = useState(false)
    const handleSeePassword = () => {
        setSeePass(!seePass)
    }
    const [seeRePass, setSeeRePass] = useState(false)
    const handleSeeRePassword = () => {
        setSeeRePass(!seeRePass)
    }

    const [samePass, setSamepass] = useState(true)


    const onSubmit = async (formData) => {
        const email = formData.email;
        const password = formData.password;
        const retypePassword = formData.retypePassword;

        if (password != retypePassword) {
            setSamepass(false)
            return;
        }
        else {
            setSamepass(true)
        }

        const userInfo = {
            name: formData.name,
            email: email,
            password: password,
            type: formData.accountType,
            role:"user",
            status: "pending",
            authen:"no"
        }

        const url = `/users?email=${email}`

        axiosGeneral.get(url)
            .then(res => {
                const registeredEmail = res.data.email;
                if (registeredEmail) {

                    Swal.fire({
                        icon: "error",
                        title: `The email address is already registered`,
                        text: `Please try using another email address.`,
                        showConfirmButton: false,
                        timer: 3000,
                        width: "280px",
                        background: "colorBase",
                        customClass: {
                            title: 'text-red-500 text-base',
                            icon: 'text-blue-200 text-[7px]',
                            popup: 'text-green-600 text-sm',
                        }
                    });
                }

                else {
                    axiosGeneral.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Successfull",
                                    text: "Please wait for managerial approval",
                                    showConfirmButton: false,
                                    width: "280px",
                                    timer: 3000,
                                    customClass: {
                                        title: 'text-[20px] text-green-600',
                                        icon: 'text-[12px]',
                                        popup: 'text-gray-600 text-sm pt-0',
                                    } 
                                });
                                reset()
                                navigate ("/")
                            }
                            else {
                                Swal.fire({
                                    icon: "error",
                                    title: `Opps!`,
                                    text: "Something Error",
                                    showConfirmButton: false,
                                    timer: 2000,
                                    width: "280px",
                                    background: "colorBase",
                                    customClass: {
                                        title: 'text-red-500 text-xl',
                                        icon: 'text-blue-200 text-[7px]',
                                        popup: 'text-green-600 text-sm',
                                    }
                                });
                            }
                        })
                }

            })

       
    }
    return (
        <div className="mx-auto flex justify-center items-center h-[100vh] text-gray-600">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-3 w-[calc(100vw-60px)]  md:w-[400px] md:mx-auto shadow-2xl shadow-stone-400 p-6 rounded-md bg-no-repeat bg-center bg-blend-lighten  ">

                    <p className="text-center font-bold text-2xl"><span className="text-colorHighLight">Milk</span> Management</p>
                    <p className="text-center font-bold text-2xl">Sign Up</p>


                    <div className="flex flex-col">
                        <label className="font-bold">Account Type<span className="text-red-500">*</span></label>
                        <select
                            name="accountType"
                            defaultValue=""
                            className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77]"
                            {...register("accountType", {
                                required: true
                            })}
                        >
                            <option value="" disabled selected className="text-gray-600">Select Account Type</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>

                        </select>
                        {errors.accountType?.type === "required" && (
                            <p role="alert" className="text-red-600 text-sm">Must be select account type</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Name<span className="text-red-500">*</span></label>
                        <input type="text"
                            name="name"
                            className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77]"
                            placeholder="Your Full Name"
                            {...register("name", {
                                required: true
                            })}
                        />
                        {errors.name?.type === "required" && (
                            <p role="alert" className="text-red-600 text-sm">Name is required</p>
                        )}
                    </div>

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
                                minLength="6"
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

                    <div className="flex flex-col">
                        <label className="font-bold">Retype Passowrd<span className="text-red-500">*</span></label>
                        <div className="flex items-center relative">
                            <input
                                name="retypePassword"
                                type={seeRePass ? "text" : "Password"}
                                minLength="6"
                                placeholder="Retype Your Password"
                                className="border-[1px]  px-2 py-1 rounded-sm bg-[#ffffff77] w-full"
                                {...register("retypePassword", {
                                    required: true,
                                })}
                            />
                            <button type="button" onClick={handleSeeRePassword} className="absolute right-2">
                                {
                                    seeRePass ? <IoEyeOutline className="text-xl"></IoEyeOutline> : <GoEyeClosed className="text-xl"></GoEyeClosed>
                                }
                            </button>
                        </div>
                        {errors.retypePassword?.type === "required" && (
                            <p role="alert" className="text-red-600 text-sm">Retype Password is required</p>
                        )}
                        {
                            samePass ? "" : <p className="text-red-600 text-sm">Passwords must be same</p>
                        }
                    </div>

                    <div className="">
                        <input type="submit" value="Sign Up" className="bg-[#f8e74d5e] border-[1px] mt-3 w-full py-1 font-bold rounded-sm  hover:bg-colorBtnHoverBase cursor-pointer" />
                    </div>
                    <p className="text-sm text-center">Already have an account? <span className="text-blue-600 font-bold"><Link to="/">Login</Link></span></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;