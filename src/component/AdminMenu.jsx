import { NavLink } from "react-router-dom";
import { PiUsersFourLight } from "react-icons/pi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaUpDownLeftRight } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiHandsPrayingFill } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GiMilkCarton } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import useCurrentUserFromDB from "../hooks/CurrentUserFromDB/useCurrentUserFromDB";
import useFindPendingUsers from "../hooks/FindPendingUsers/useFindPendingUsers";
import { useContext } from "react";
import { pendingUserContext } from "../Provider/PendingUserProvider";

const AdminMenu = () => {
    const { currentUserInDB } = useCurrentUserFromDB()
    const url="/pending-users"
    const criteria  = {
        status:"pending"
    }

    const {foundUsersInDB,isLoading,refetch}= useFindPendingUsers(url,criteria) 
    const numberOfPendingUsers1=foundUsersInDB?.length
 

    const { pendingUsers } = useContext(pendingUserContext)
    const numberOfPendingUsers2 = pendingUsers?.length

    const BuyerMenu =
        <>
            {
                currentUserInDB?.role == "admin" && <>
                    <p className="font-bold">Admin Related</p>
                    <li><NavLink to="/dashboard/users"><PiUsersFourLight className="text-[18px]" />User List</NavLink></li>
                    <li><NavLink to="/error"><BiPurchaseTagAlt className="text-[18px]" />Purchased History</NavLink></li>
                    <li><NavLink to="/error"><FaUpDownLeftRight className="text-[18px]" />Supply History</NavLink></li>
                    <li><NavLink to="/error"><FaMoneyBillTrendUp className="text-[18px]" />Payment History</NavLink></li>
                    <li ><NavLink to="/dashboard/acc-request"><PiHandsPrayingFill className="text-[18px]" />Account Request{numberOfPendingUsers2? <span className="text-white  px-[6px] bg-red-600 rounded-[50px]">{numberOfPendingUsers2}</span>:<span className="text-white  px-[6px] bg-red-600 rounded-[50px]">{numberOfPendingUsers1}</span>}</NavLink></li>
                    <li><NavLink to="/error"><LiaHandsHelpingSolid className="text-[18px]" />Payment Request</NavLink></li>
                    <li><NavLink to="/error"><GiMilkCarton className="text-[18px]" />Supply Request</NavLink></li>
                    <li><NavLink to="/error"><FaHandHoldingWater className="text-[18px]" />Purchases  Request</NavLink></li>
                </>
            }
        </>


    return BuyerMenu;
};

export default AdminMenu;