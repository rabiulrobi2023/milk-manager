import { NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiHandsPrayingFill } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";
import { TbPackageExport } from "react-icons/tb";
import useCurrentUserFromDB from "../hooks/CurrentUserFromDB/useCurrentUserFromDB";

const SellerMenu = () => {
    const { currentUserInDB, refetch, isLoading } = useCurrentUserFromDB()


    const SellerMenu = <>

        {

            currentUserInDB?.type == "seller" && <>
                <li><NavLink to="/dashboard/home"><RxDashboard className="text-[18px]" />Home</NavLink></li>
                <li><NavLink to="/dashboard/buy"><TbPackageExport className="text-[18px]" />Sell Now</NavLink></li>
                <li><NavLink to="/dashboard/pay"><PiHandsPrayingFill className="text-[18px]" />Request a Payment</NavLink></li>
            </>
        }

    </>
    return SellerMenu;
};

export default SellerMenu;