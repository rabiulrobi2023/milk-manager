
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";



const UserMenu = () => {
    const userHistory = <>
        <div className="flex  flex-col">
            <div className="flex justify-center text-6xl"><FaRegUserCircle></FaRegUserCircle></div>
            <p className="font-bold text-center mt-2">Mohammad Monowar Hossain Munna</p>
            {/* <p className="pt-2 flex gap-2 items-center"><HiOutlineCurrencyBangladeshi />{`Banlance: 0.00 TK`}</p>
            <p className="flex gap-2 items-center"><AiOutlineShopping></AiOutlineShopping>{`Purchased: 0.00 Ltr`}</p> */}
        </div>

    </>

    return userHistory;
};

export default UserMenu;