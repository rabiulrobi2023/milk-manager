import { NavLink } from "react-router-dom";
import { PiUsersFourLight } from "react-icons/pi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaUpDownLeftRight } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiHandsPrayingFill } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GiMilkCarton } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

const AdminMenu = () => {

    const BuyerMenu = <>
        <p className="font-bold">Admin Related</p>
        <li><NavLink to="/error"><PiUsersFourLight className="text-[18px]" />User List</NavLink></li>
        <li><NavLink to="/error"><BiPurchaseTagAlt className="text-[18px]" />Purchased History</NavLink></li>
        <li><NavLink to="/error"><FaUpDownLeftRight className="text-[18px]" />Supply History</NavLink></li>
        <li><NavLink to="/error"><FaMoneyBillTrendUp className="text-[18px]" />Payment History</NavLink></li>
        <li><NavLink to="/dashboard/acc-request"><PiHandsPrayingFill className="text-[18px]"/>Account Request</NavLink></li>
        <li><NavLink to="/error"><LiaHandsHelpingSolid className="text-[18px]"/>Payment Request</NavLink></li>
        <li><NavLink to="/error"><GiMilkCarton className="text-[18px]"/>Supply Request</NavLink></li>
        <li><NavLink to="/error"><FaHandHoldingWater className="text-[18px]"/>Purchases  Request</NavLink></li>

    </>
    return BuyerMenu;
};

export default AdminMenu;