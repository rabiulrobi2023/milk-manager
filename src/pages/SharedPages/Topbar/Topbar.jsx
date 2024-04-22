import { GrHistory } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import UserMenu from "../../../component/UserMenu";
import BuyerMenu from "../../../component/BuyerMenu";
import SubMenu from "../../../component/SubMenu";
import AdminMenu from "../../../component/AdminMenu";
import Preference from "../../../component/Preference";
import SellerMenu from "../../../component/SellerMenu";

const Topbar = () => {

    return (
        <div className="h-20 bg-gray-700 px-9  items-center flex flex-grow-0 justify-between ">
            <div className="navbar-start md:hidden w-9">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <CiMenuBurger className="text-base"></CiMenuBurger>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  w-60">

                        <div className=" border-gray-200 h-screen p-4 bg-colorBase ">
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
            <div className="h-full w-1/3">
                <img src="https://i.ibb.co/sJ74JtY/milk-icon2.png" className=" h-full" alt="" />
            </div>
            <p className="text-base md:text-2xl w-1/3  font-bold text-gray-400 "><span className="text-yellow-600 ">Milk</span> Management</p>
            <div className="text-gray-200 flex gap-5 items-center font-bold">
                <p className="text-xs md:text-base text-green-500F">Stock: 5.00L</p>
                <div>
                    <p className="text-xs md:text-base ">Rate: 60.00TK</p>
                    {/* <p className="text-xs md:text-base">Change Rate</p> */}

                </div>

            </div>

        </div>
    );
};

export default Topbar;