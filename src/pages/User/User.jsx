import Swal from "sweetalert2";
import useAxiosGeneral from "../../hooks/Axios/useAxiosGeneral";
import useCurrentUserFromDB from "../../hooks/CurrentUserFromDB/useCurrentUserFromDB";
import { useNavigate } from "react-router-dom";


const User = ({ user, index, refetch }) => {
    const { _id, name, email, type, role } = user;
    const axiosGeneral = useAxiosGeneral()
    const {currentUserInDB,isLoading}=useCurrentUserFromDB()

    const navigate=useNavigate()
    // console.log(currentUserInDB.name)
    // console.log(currentUserInDB._id)
    // console.log(_id)


    const updateData1 = {
        role: "admin"
    }
    const updateData2 = {
        role: "user"

    }
    const handleMakeAdmin = () => {
        Swal.fire({
            html: `If your make this account as admin you will lost your admin power. Are you aggree?`,
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
                    axiosGeneral.patch(`/users/${_id}`, updateData1)
                    .then(res => {
                        axiosGeneral.patch(`/users/${currentUserInDB?._id}`, updateData2)
                        .then(res=>{
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
                            refetch()
                            navigate("/")
                            

                        })
                        
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
            <td className="border-[1px] capitalize ">{role}</td>
            <td className={`border-[1px] ${role=="admin" ? "text-gray-500 btn-disabled  ":""}  hover:no-underline text-green-600 cursor-pointer hover:text-green-500 hover:scale-125`} onClick={handleMakeAdmin}>Make Admin</td>
            <td className={`border-[1px] ${role=="admin" ? "text-gray-500 btn-disabled  ":""}  hover:no-underline text-red-600 cursor-pointer hover:text-green-500 hover:scale-125`} onClick={handleDelete}>Delete</td>
        </tr>
    );
};

export default User;