import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "../../hooks/Axios/useAxiosGeneral";
import PendingUser from "../PendingUser/PendingUser";

const PendingUsers = () => {
    const axiosGeneral = useAxiosGeneral()
    const url = "/pending-users"

    const { data: users, refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosGeneral.get(url, {
                params: {
                    status: 'pending'
                }
            })
            return res.data
        }
    })




    return (
        <div className="overflow-x-auto p-5">
            <p className="text-center font-bold mb-2 underline text-lg text-gray-600">New Account Request</p>
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead className="file:text-center font-bold text-gray-800">
                    <tr className="h-10 bg-colorBase text-center">
                        <td className="border-[1px]">SL <br />No</td>
                        <td className="border-[1px] w-48 ">Name</td>
                        <td className="border-[1px]">Email</td>
                        <td className="border-[1px]">AC Type</td>
                        <td className="border-[1px] " colSpan={2}>Action</td>
                       

                    </tr>
                </thead>
                <tbody>
                   <>
                   {
                    users?.map((user,index,refatch)=><PendingUser user={user} key={user._id} index={index} refetch={refetch}></PendingUser>)
                   }
                   </>
                </tbody>

            </table>
        </div>
    );
};

export default PendingUsers;