import { GrHistory } from "react-icons/gr";
import UserMenu from "../../../component/UserMenu";
import BuyerMenu from "../../../component/BuyerMenu";
import SubMenu from "../../../component/SubMenu";
import AdminMenu from "../../../component/AdminMenu";
import Preference from "../../../component/Preference";
import SellerMenu from "../../../component/SellerMenu"

const Sidebar = () => {
  
    return (
     
            <div className="h-[calc(100vh-200px)] md:h-screen p-4 bg-colorBase hidden md:flex md:flex-col w-[250px]">
                <UserMenu></UserMenu>
                <ul className="menu menu-vertical mx-[-16px] pt-5">
                    <BuyerMenu></BuyerMenu>
                    <SellerMenu></SellerMenu>
                    
                    <li className="px-0 mb-5">
                        <details>
                            <summary className="border-0"><GrHistory></GrHistory>History</summary>
                            <ul className="pl-4">
                                <SubMenu></SubMenu>
                            </ul>
                        </details>
                    </li>
                    <AdminMenu></AdminMenu>
                    <Preference></Preference>
                </ul>
            </div>

    );
};

export default Sidebar;