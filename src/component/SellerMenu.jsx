import { NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiHandsPrayingFill } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";
import { TbPackageExport } from "react-icons/tb";
import useCurrentUserFromDB from "../hooks/useCurrentUserFromDB";

const SellerMenu = () => {
    const { currentUserInDB, refetch, isLoading } = useCurrentUserFromDB()


    const SellerMenu = <>

        {
            
            currentUserInDB?.type == "seller" && <>
            <p className="font-bold">Seller Related</p>
            <li><NavLink to="/dashboard/home"><RxDashboard className="text-[18px]" />Home</NavLink></li>
            <li><NavLink to="/dashboard/sell"><TbPackageExport className="text-[18px]" />Sell Now</NavLink></li>
            <li><NavLink to="/dashboard/payment-request-to-seller"><PiHandsPrayingFill className="text-[18px]" />Payment Requests</NavLink></li>
        </>
        }

    </>
    return SellerMenu;
};

export default SellerMenu;