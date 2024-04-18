import { GrHistory } from "react-icons/gr";
import UserMenu from "../../../component/UserMenu";
import BuyerMenu from "../../../component/BuyerMenu";
import SubMenu from "../../../component/SubMenu";
import AdminMenu from "../../../component/AdminMenu";




const Sidebar = () => {

    return (
        <div>
            <div className="h-[calc(100vh-200px)] md:h-screen p-4 bg-colorBase hidden md:flex md:flex-col ">
                <UserMenu></UserMenu>
                <ul className="menu menu-vertical mx-[-16px] pt-10 ">
                    <BuyerMenu></BuyerMenu>
                    <li className="px-0 mb-20">
                        <details>
                            <summary className="border-0"><GrHistory></GrHistory>History</summary>
                            <ul className="pl-4">
                                <SubMenu></SubMenu>
                            </ul>
                        </details>
                    </li>
                    <AdminMenu></AdminMenu>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;