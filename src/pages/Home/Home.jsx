import { useQuery } from "@tanstack/react-query";
import useCurrentUserFromDB from "../../hooks/useCurrentUserFromDB";
import Sidebar from "../SharedPages/Sidebar/Sidebar";
import Topbar from "../SharedPages/Topbar/Topbar";
import useAxiosGeneral from "../../hooks/useAxiosGeneral";
import useAuth from "../../hooks/useAuth";


const Home = () => {
    const { currentUserInDB, refetch, isLoading } = useCurrentUserFromDB()
    const {user}=useAuth()

  
   
  

    
    const axiosGeneral = useAxiosGeneral()
    const { currentMonthPurIndi } = useQuery({
        queryKey: ["currentMonthPurchaseIndi"],
        queryFn: async () => {
            const res = await axiosGeneral.get(`/exports?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(currentMonthPurIndi)


   






    if (isLoading) {
        return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20 absolute left-[50%] right-[50%] tran"></p>

    }








    return (
        <div className="pt-6 text-sm md:text-base px-2 flex flex-col h-full bg-[url(https://i.ibb.co/X2YM9vn/background01.jpg)] bg-fixed overflow-auto mb-10">
            <p className="text-center font-bold text-xl text-yellow-600">Dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 items-center content-center mx-auto mt-4">
              
                <div className="w-full md:w-[350px]  p-3   border-[1px] border-gray-400  ">
                    <p className="font-bold">Account Information</p>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td className="pl-2 pr-2">:</td>
                            <td >{currentUserInDB?.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td className="pl-2 pr-2">:</td>
                            <td>{currentUserInDB?.email}</td>
                        </tr>
                        <tr>
                            <td>A/C Type</td>
                            <td className="pl-2 pr-2">:</td>
                            <td className="capitalize">{currentUserInDB?.type}</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td className="pl-2 pr-2">:</td>
                            <td className="capitalize">{currentUserInDB?.role}</td>
                        </tr>
                    </tbody>
                </div>

                <div className="w-full md:w-[350px]  p-3   border-[1px] border-gray-400 rounded-sm">
                    <p className="font-bold">Balance Summary</p>
                    <tbody>
                        <tr>
                            <td>Total Purchase</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>35.00 LTR</td>
                        </tr>
                        <tr>
                            <td>Total Price</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>5000.00 TK</td>
                        </tr>
                        <tr>
                            <td>Total Payment</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>4800.00 TK</td>
                        </tr>
                        <tr>
                            <td>Due</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>200.00 TK</td>
                        </tr>
                    </tbody>
                </div>

                <div className="w-full md:w-[350px]  p-3   border-[1px] border-gray-400 rounded-sm">
                    <p className="font-bold">Current Month Summary</p>
                    <tbody>
                        <tr>
                            <td>Purchase:</td>
                            <td className="pl-2 pr-2">:</td>
                            <td >20.00 Litter</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td className="pl-2 pr-2">:</td>
                            <td>300.00 TK</td>
                        </tr>
                        <tr>
                            <td>Payment</td>
                            <td className="pl-2 pr-2">:</td>
                            <td className="capitalize">200.00TK</td>
                        </tr>
                        <tr>
                            <td>Pending Payment</td>
                            <td className="pl-2 pr-2">:</td>
                            <td className="capitalize">100.00TK</td>
                        </tr>
                    </tbody>
                </div>

                <div className="w-full md:w-[350px]  p-3   border-[1px] border-gray-400 rounded-sm ">
                    <p className="font-bold">Current Month Purchases</p>
                    <tbody>
                        <tr>
                            <td>Total Purchase</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>35.00 LTR</td>
                        </tr>
                        <tr>
                            <td>Total Price</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>5000.00 TK</td>
                        </tr>
                        <tr>
                            <td>Total Payment</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>4800.00 TK</td>
                        </tr>
                        <tr>
                            <td>Due</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>200.00 TK</td>
                        </tr>
                    </tbody>
                </div>




            </div>





        </div>
    );
};

export default Home;