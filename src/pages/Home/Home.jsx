
import useCurrentUserFromDB from "../../hooks/useCurrentUserFromDB";


import useTotalPurIndi from "../../hooks/useTotalPurIndi";


const Home = () => {
   
    const { currentUserInDB, isLoading } = useCurrentUserFromDB()
    const {totalPurIndi}=useTotalPurIndi()
    if(isLoading){
        return <p className=" absolute left-1/2 right-1/2   loading loading-spinner text-yellow-600 text-center mx-auto flex mt-20"></p>
     }
 


    const { type, name } = currentUserInDB
    const {expTotalAmountIndi,expTotalTkIndi}=totalPurIndi
   










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
                        <td >{name}</td>
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
                        <td>{type === "seller" ? "Total Sold": "Toal Purchase"}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>{type === "seller" ? 0.00 :expTotalAmountIndi?.toFixed(2)} LTR</td>
                    </tr>
                    <tr>
                        <td>Total Price</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>{type === "seller" ? 0.00 :expTotalTkIndi?.toFixed(2)} TK</td>
                    </tr>
                    <tr>
                        <td>{type === "seller" ? <p>Total Received</p> : <p>Toal Payment</p>}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>4800.00 TK</td>
                    </tr>
                    <tr>
                        <td>{type === "seller" ? <p>Receivable</p> : <p>Due</p>}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>200.00 TK</td>
                    </tr>
                </tbody>
            </div>

            <div className="w-full md:w-[350px]  p-3   border-[1px] border-gray-400 rounded-sm">
                <p className="font-bold">Current Month Summary</p>
                <tbody>
                    <tr>
                        <td>{type === "seller" ? <p>Sold</p> : <p>Purchase</p>}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>35.00 LTR</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>5000.00 TK</td>
                    </tr>
                    <tr>
                        <td>{type === "seller" ? <p>Received</p> : <p>Payment</p>}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>4800.00 TK</td>
                    </tr>
                    <tr>
                        <td>{type === "seller" ? <p>Receivable</p> : <p>Due</p>}</td>
                        <td className="pl-4 pr-2">:</td>
                        <td>200.00 TK</td>
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