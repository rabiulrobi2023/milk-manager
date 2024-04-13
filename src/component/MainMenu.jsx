import { NavLink } from "react-router-dom";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { PiShoppingCartThin } from "react-icons/pi";
import { FcDonate } from "react-icons/fc";
import { GrHistory } from "react-icons/gr";

const MainMenu = () => {
    const mainMenu= <>
    {/* <li><NavLink to="/add">Add Milk</NavLink></li> */}
    <li><NavLink to="/buy"><PiShoppingCartThin className="text-[18px]" />Buy Milk</NavLink></li>
    <li><NavLink to="/pay"><FcDonate className="text-[18px]"></FcDonate>Pay</NavLink></li>
</>
    return mainMenu;
};

export default MainMenu;