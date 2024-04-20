
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import useAuth from "../hooks/Auth/useAuth";
import useCurrentUserFromDB from "../hooks/CurrentUserFromDB/useCurrentUserFromDB";



const UserMenu = () => {
    // const {user}=useAuth()
    // console.log(user)
    const { currentUserInDB, isLoading } = useCurrentUserFromDB()
    const userNameInDB = currentUserInDB?.name
    if (isLoading) {
        return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20"></p>
    }
    
    console.log(userNameInDB)


    const userHistory = <>
        <div className="flex justify-center items-center gap-2 flex-col">
            <p className="text-center text-6xl"><FaRegUserCircle></FaRegUserCircle></p>
            
            {/* <div className="flex justify-center text-6xl cursor-pointer hover:animate-pulse"></div> */}
            <p className="font-bold text-center mt-2 animate-pulse">{userNameInDB}</p>
            
            {/* <p className="pt-2 flex gap-2 items-center"><HiOutlineCurrencyBangladeshi />{`Banlance: 0.00 TK`}</p>
            <p className="flex gap-2 items-center"><AiOutlineShopping></AiOutlineShopping>{`Purchased: 0.00 Ltr`}</p> */}
        </div>

    </>

    return userHistory;
};

export default UserMenu;