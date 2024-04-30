import { NavLink } from "react-router-dom";
import { PiUsersFourLight } from "react-icons/pi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaUpDownLeftRight } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiHandsPrayingFill } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GiMilkCarton } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import useCurrentUserFromDB from "../hooks/useCurrentUserFromDB";
import useFindPendingUsers from "../hooks/useFindPendingUsers";
import { useContext } from "react";
import { pendingUserContext } from "../Provider/PendingUserProvider";
import { TbDatabaseEdit } from "react-icons/tb";
import usePendigImport from "../hooks/usePendigImport";

const AdminMenu = () => {
    const { currentUserInDB } = useCurrentUserFromDB()
    const url = "/pending-users"
    const criteria = {
        status: "pending"
    }

    const { foundUsersInDB } = useFindPendingUsers(url, criteria)
    const numberOfPendingUsers1 = foundUsersInDB?.length
    const { pendingUsers } = useContext(pendingUserContext)
    const numberOfPendingUsers2 = pendingUsers?.length


    const { pendingImportInfo, isLoading, refetch } = usePendigImport()
    const numberOfPendingImp = pendingImportInfo?.importerInfo.length



    const BuyerMenu =
        <>
            {
                currentUserInDB?.role == "admin" && <>
                    <p className="font-bold">Admin Related</p>
                    <li><NavLink to="/dashboard/users" ><PiUsersFourLight className="text-[18px] active:text-red-500 " />User List</NavLink></li>

                    <li ><NavLink to="/dashboard/acc-request"><PiHandsPrayingFill className="text-[18px]" />Account Request{numberOfPendingUsers2}</NavLink></li>
                    <li><NavLink to="/dashboard/payment-request-to-manager"><LiaHandsHelpingSolid className="text-[18px]" />Payment Request</NavLink></li>
                    <li><NavLink to="/dashboard/payment-from-manager"><LiaHandsHelpingSolid className="text-[18px]" />Pay</NavLink></li>
                    <li><NavLink to="/dashboard/supply-request"><GiMilkCarton className="text-[18px]" />Supply Request{numberOfPendingImp > 0 ? <span className="text-white  px-[6px] bg-red-600 rounded-[50px]">{numberOfPendingImp}</span> : ""}</NavLink></li>
                    <li><NavLink to="/error"><BiPurchaseTagAlt className="text-[18px]" />Purchased History</NavLink></li>
                    <li><NavLink to="/error"><FaUpDownLeftRight className="text-[18px]" />Supply History</NavLink></li>
                    <li><NavLink to="/error"><FaMoneyBillTrendUp className="text-[18px]" />Payment History</NavLink></li>

                    <li ><NavLink to="/dashboard/new-rate"><TbDatabaseEdit className="text-[18px]" />Change Rate</NavLink></li>
                </>
            }
        </>


    return BuyerMenu;
};

export default AdminMenu;