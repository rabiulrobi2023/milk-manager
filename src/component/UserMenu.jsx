import { NavLink } from "react-router-dom";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { PiShoppingCartThin } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { GrHistory } from "react-icons/gr";

const UserMenu = () => {
    const userHistory = <>
    <div className="flex  flex-col">
        <p className="font-bold text-center">Mohammad Monowar Hossain Munna</p>
        <p className="pt-2 flex gap-2 items-center"><HiOutlineCurrencyBangladeshi />{`Banlance: 0.00 TK`}</p>
        <p className="flex gap-2 items-center"><AiOutlineShopping></AiOutlineShopping>{`Purchased: 0.00 Ltr`}</p>
    </div>

</>
    
    return userHistory;
};

export default UserMenu;