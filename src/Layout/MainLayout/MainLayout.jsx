import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/SharedPages/Sidebar/Sidebar";
import Topbar from "../../pages/SharedPages/Topbar/Topbar";

const MainLayout = () => {

    return (
        <div className="max-w-[1080px] mx-auto">
            <div className="flex">
                <Sidebar></Sidebar>
                <div className="w-full">
                    <Topbar></Topbar>
                    <div className="bg-gray-50 h-[calc(100vh-80px)]">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;