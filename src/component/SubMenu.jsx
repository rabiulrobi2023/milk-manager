import { NavLink } from "react-router-dom";

const SubMenu = () => {
    const subMenu= <>
        {/* <li className="px-0"><NavLink to="/added-milk">Added Milk</NavLink></li> */}
        <li className="px-0"><NavLink to="/purchased-milk">Purchased Milk</NavLink></li>
        <li><NavLink to="/payment-history">Payment History</NavLink></li>
    </>
    return subMenu;
};

export default SubMenu;