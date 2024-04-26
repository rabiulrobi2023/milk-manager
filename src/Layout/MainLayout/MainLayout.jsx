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
                    <div className="bg-gray-50 h-[calc(100vh-90px)] relative">
                        <Outlet></Outlet>
                        <p className="text-xs absolute   -right-0 px-2 md:px-9 bottom-0 text-gray-500">Develop by: Md. Rabiul Islam</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MainLayout;