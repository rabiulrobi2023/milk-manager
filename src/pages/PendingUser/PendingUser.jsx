import { useContext } from "react";
import AuthProvider, { authContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";
<link rel="stylesheet" href="sweetalert2.min.css"></link>


const PendingUser = ({ user, index, refetch }) => {
    const { name, email, type, password, _id } = user;
    const axiosGeneral = useAxiosGeneral()
    const { createUser } = useContext(authContext)


    const updateData = {
        status: "approved"
    }
    const handleApporve = () => {
        Swal.fire({
            html: `Are you sure approve the user?`,
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

        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosGeneral.patch(`/users/${_id}`, updateData)
                        .then(res => {
                            refetch()
                            Swal.fire({
                                icon: "success",
                                title: "Approved",
                                showConfirmButton: false,
                                width: "280px",
                                timer: 3000,
                                customClass: {
                                    title: 'text-[20px] text-green-600',
                                    icon: 'text-[12px]',
                                    popup: 'text-gray-600 text-sm pt-0',
                                }
                            });
                        })
                }
            });

    }

    const handleDelete = () => {
        Swal.fire({
            html: `Are you sure delete the account request?`,
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
                axiosGeneral.delete(`/users/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                icon: "success",
                                title: "Successfull",
                                showConfirmButton: false,
                                width: "280px",
                                timer: 3000,
                                customClass: {
                                    title: 'text-[20px] text-green-600',
                                    icon: 'text-[12px]',
                                    popup: 'text-gray-600 text-sm pt-0',
                                }
                            });

                        }
                    })
            }
        });


    }
    

    return (
        <tr className="h-10 hover:bg-[#cecccc32] text-center max-w-fit  ">
            <td className="border-[1px] min-w-fit">{index + 1}</td>
            <td className="border-[1px] text-left whitespace-nowrap">{name}</td>
            <td className="border-[1px] text-left">{email}</td>
            <td className="border-[1px] capitalize ">{type}</td>
            <td className="border-[1px] text-green-600 cursor-pointer hover:scale-125 hover:text-green-500" onClick={handleApporve}>Approve</td>
            <td className="border-[1px] text-red-600 cursor-pointer hover:text-red-500 hover:scale-125" onClick={handleDelete}>Delete</td>
        </tr>
    );
};

export default PendingUser;