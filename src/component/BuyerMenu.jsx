import { NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";

const BuyerMenu = () => {
    const BuyerMenu = <>
        <li><NavLink to="/dashboard/home"><RxDashboard className="text-[18px]" />Home</NavLink></li>
        <li><NavLink to="/dashboard/buy"><PiShoppingCartThin className="text-[18px]" />Buy Milk</NavLink></li>
        <li><NavLink to="/dashboard/pay"><FcDonate className="text-[18px]"></FcDonate>Pay</NavLink></li>
    </>
    return BuyerMenu;
};

export default BuyerMenu;