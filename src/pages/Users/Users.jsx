
import useApprovedUsers from "../../hooks/useApprovedUsers";
import User from "../User/User";


const Users = () => {
    const {approvedUsers, refetch, isLoading}=useApprovedUsers()
    console.log(approvedUsers, isLoading)
    
    if(isLoading){
        return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20"></p>
     }
    return (
        <div >
        {
            approvedUsers?.length ?
                <div className="flex flex-col  m-auto  h-full pt-10">
                    <img src="https://i.ibb.co/SJzFQLm/empty.png" alt="" className="w-20 h-20 flex m-auto" />
                    <p className="text-center">There is no any user</p>
                </div>
                :
                <div className="overflow-x-auto p-5">

                    <p className="text-center font-bold mb-2 underline text-lg text-gray-600">Users List</p>
                    <table className="table table-xs table-pin-rows table-pin-cols">

                        <thead className="file:text-center font-bold text-gray-800">
                            <tr className="h-10 bg-colorBase  text-center z-0">
                            <td className="border-[1px]">SL <br />No</td>
                                <td className="border-[1px] w-48 ">Name</td>
                                <td className="border-[1px]">Email</td>
                                <td className="border-[1px]">AC Type</td>
                                <td className="border-[1px]">Role</td>
                                <td className="border-[1px] " colSpan={2} >Action</td>

                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    approvedUsers?.data?.map((user, index) => <User user={user} key={user._id} index={index} refetch={refetch}></User>)
                                }
                            </>
                        </tbody>

                    </table>
                </div>

        }

    </div>
    );
};

export default Users;