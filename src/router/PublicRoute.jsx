import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import BuyMilk from "../pages/BuyMilk/BuyMilk";
import Home from "../pages/Home/Home";
import Pay from "../pages/Pay/Pay";
import Login from "../pages/Login/Login";
import StartingLayout from "../Layout/StartingLayout/StartingLayout";
import SignUp from "../pages/SignUp/SignUp";
import PendingUsers from "../pages/PendingUsers/PendingUsers";
import Users from "../pages/Users/Users";


import Rate from "../pages/Rate/Rate";
import SellerRoute from "./SellerRoute";
import Sell from "../pages/Sell/Sell";
import AdminRoute from "./AdminRoute";



const router = createBrowserRouter([
  {
    path:"/",
    element:<StartingLayout></StartingLayout>,
    children:[
      {
        path: "/",
        element: <Login></Login>
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      }
    ]

  },
  


  {
    path: "dashboard",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "home",
        element: <Home></Home>
      },
      {
        path:"buy",
        element: <BuyMilk></BuyMilk>
      },
      {
        path: "pay",
        element: <Pay></Pay>
      },
      {
        path:"acc-request",
        element: <PendingUsers></PendingUsers>
      },
      {
        path:"users",
        element:<AdminRoute></AdminRoute>
      },
      {
        path:"new-rate",
        element:<Rate></Rate>
      },
      {
        path:"sell",
        element:<SellerRoute><Sell></Sell></SellerRoute>
      }

    ]


  },
]);
export default router;