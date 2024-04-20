import { GrHistory } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import UserMenu from "../../../component/UserMenu";
import BuyerMenu from "../../../component/BuyerMenu";
import SubMenu from "../../../component/SubMenu";
import AdminMenu from "../../../component/AdminMenu";
import Preference from "../../../component/Preference";

const Topbar = () => {

    return (
        <div className="h-20 bg-gray-200 p-2  items-center flex flex-grow-0 justify-between md:justify-between">
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
            <div className="h-full">
                <img src="https://i.ibb.co/sJ74JtY/milk-icon2.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-base md:text-2xl   font-bold "><span className="text-yellow-600 ">Milk</span> Management</p>
            <p className="text-xs md:text-base">Stock: 5.00 Litter</p>
        </div>
    );
};

export default Topbar;