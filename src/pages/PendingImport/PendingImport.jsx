import Swal from "sweetalert2";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";
import moment from "moment";
import { reload } from "firebase/auth";



const PendingImport = ({pendingImport,refetch,index}) => {
    const  {_id,sellerName,sellerEmail,sellingDate,soldAmount,rate,price}=pendingImport



  
    
    const axiosGeneral = useAxiosGeneral()
    const updateData = {
        status: "approved"
    }
    const handleApporve = () => {
        Swal.fire({
            html: `Are you sure accept the supply request?`,
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
                    axiosGeneral.patch(`/imports/${_id}`, updateData)
                        .then(res => {
                            refetch()
                            console.log(res.data.modifiedCount)
                            if(res.data.modifiedCount>0){
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
                                window.location.reload()
                            }
                            
                        })
                }
            });

    }

    const handleDelete = () => {
        Swal.fire({
            html: `Are you sure delete the supply request?`,
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
                axiosGeneral.delete(`/imports/${_id}`)
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
            <td className="border-[1px] ">{moment(sellingDate).format("DD-MMM-YYYY")}</td>
            <td className="border-[1px] text-left whitespace-nowrap">{sellerName}</td>
            <td className="border-[1px] text-left">{sellerEmail}</td>
            <td className="border-[1px] text-center">{soldAmount.toFixed(2)} LTR</td>
            <td className="border-[1px] text-center">{rate.toFixed(2)} TK/L</td>
            <td className="border-[1px] left normal-nums ">{price.toFixed(2)} TK</td>
            <td className="border-[1px] text-green-600 cursor-pointer hover:scale-125 hover:text-green-500" onClick={handleApporve}>Approve</td>
            <td className="border-[1px] text-red-600 cursor-pointer hover:text-red-500 hover:scale-125" onClick={handleDelete}>Delete</td>
        </tr>
    );
};

export default PendingImport;