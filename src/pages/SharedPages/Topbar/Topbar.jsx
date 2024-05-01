import { GrHistory } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import UserMenu from "../../../component/UserMenu";
import BuyerMenu from "../../../component/BuyerMenu";
import SubMenu from "../../../component/SubMenu";
import AdminMenu from "../../../component/AdminMenu";
import Preference from "../../../component/Preference";
import SellerMenu from "../../../component/SellerMenu";
import useAxiosGeneral from "../../../hooks/useAxiosGeneral";
import { useQuery } from "@tanstack/react-query";


import useExpTotal from "../../../hooks/useExpTotal";
import useApprovedImp from "../../../hooks/useApprovedImp";


const Topbar = () => {
    const axiosGeneral = useAxiosGeneral()
    const { approvedImp,refetch}= useApprovedImp()
    const { exportTotal }=  useExpTotal()


    const stock = (approvedImp?.impTotalAmount-exportTotal?.expTotalAmount).toFixed(2);
 



    const { data: rate } = useQuery({
        queryKey: ["rate"],
        queryFn: async () => {
            const res = await axiosGeneral("/rates")
            return res.data
        }
    })
    const finalRate = rate?.newRate.toFixed(2)
    refetch()



    return (
        <div className="h-[90px] bg-gray-800 px-2 md:px-9  items-center flex ">
            <div className="navbar-start md:hidden flex-none w-[30px]">

                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" text-white  text-xl"><CiMenuBurger></CiMenuBurger></label>
                    </div>
                    <div className="drawer-side z-10 mt-20  ">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] bg-colorBase  w-2/3 ">

                            <div className=" border-gray-200 h-[100vh] py-5">
                                <UserMenu></UserMenu>
                                <ul className="menu menu-vertical mx-[-16px] pt-5 mb-4 ">
                                    <BuyerMenu></BuyerMenu>
                                    <SellerMenu></SellerMenu>
                                    <li className="px-0">
                                        <details>
                                            <summary><GrHistory></GrHistory>History</summary>
                                            <ul className="pl-4">
                                                <SubMenu></SubMenu>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                                <AdminMenu></AdminMenu>
                                <Preference></Preference>
                            </div>

                        </ul>
                    </div>
                </div>


            </div>
            <div className="flex content-between items-center justify-between flex-grow  mx-auto ">
                <div className="flex items-center">
                    <img src="https://i.ibb.co/sJ74JtY/milk-icon2.png" className="w-10 md:w-16" alt="" />
                    <p className="text-sm md:text-2xl  font-bold text-gray-400 pl-4 md:pl-4 "><span className="text-yellow-600 ">Milk</span><br /> Management</p>
                </div>
               
                <div className="gap-[4px] items-center font-bold text-center text-yellow-600">
                    <p className="text-[12px] md:text-base text-green-500">Stock: {stock} LTR</p>
                    <p className="text-[10px] md:text-base ">Rate: {finalRate} TK/L </p>

                </div>
            </div>

        </div>
    );
};

export default Topbar;