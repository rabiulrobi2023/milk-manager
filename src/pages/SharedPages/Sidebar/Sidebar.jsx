import { GrHistory } from "react-icons/gr";
import UserMenu from "../../../component/UserMenu";
import MainMenu from "../../../component/MainMenu";
import SubMenu from "../../../component/SubMenu";




const Sidebar = () => {

    return (
        <div>
            <div className="h-[calc(100vh-200px)] md:h-screen p-4 bg-[#f3f1e4] hidden md:flex md:flex-col ">
                <UserMenu></UserMenu>
                <ul className="menu menu-vertical mx-[-16px] pt-10 ">
                   <MainMenu></MainMenu>
                    <li className="px-0">
                        <details>
                            <summary className="border-0"><GrHistory></GrHistory>History</summary>
                            <ul className="pl-4">
                                <SubMenu></SubMenu>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;