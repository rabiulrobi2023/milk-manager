import { NavLink, useNavigate } from "react-router-dom";
import { PiUsersFourLight } from "react-icons/pi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaUpDownLeftRight } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiHandsPrayingFill } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GiMilkCarton } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { BiLogOutCircle } from "react-icons/bi";



const Preference = () => {
    const navigate=useNavigate()
    const {logout}=useContext(authContext)

    const handleLogout=()=>{
        logout()
        navigate("/")

    }

    return (
        <div className="mt-4">
            <p className="font-bold ">Preference</p>
            <li><NavLink to="/error"><PiUsersFourLight className="text-[18px]" />Change Name</NavLink></li>
            <li><NavLink to="/error"><BiPurchaseTagAlt className="text-[18px]" />Change Password</NavLink></li>
            <li><p onClick={handleLogout}><BiLogOutCircle className="text-[18px]"></BiLogOutCircle>Logout</p></li>
                 
        </div>

    );
};

export default Preference;