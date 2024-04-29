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
import PendingImports from "../pages/PendingImports/PendingImports";
import PaymentRequestsToSeller from "../pages/PaymentRequestsToSeller/PaymentRequestsToSeller";
import PaymentReqToManger from "../pages/PaymentReqToManager/PaymentReqToManger";



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
        element: <AdminRoute><PendingUsers></PendingUsers></AdminRoute>
      },
      {
        path:"users",
        element:<AdminRoute><Users></Users></AdminRoute>
      },
      {
        path:"new-rate",
        element:<Rate></Rate>
      },
      {
        path:"sell",
        element:<SellerRoute><Sell></Sell></SellerRoute>
      },
      {
        path:"supply-request",
        element:<PendingImports></PendingImports>
      },
      {
        path:"payment-request-to-seller",
        element: <PaymentRequestsToSeller></PaymentRequestsToSeller>
      },
      {
        path:"payment-request-to-manager",
        element:<PaymentReqToManger></PaymentReqToManger>
      }

    ]


  },
]);
export default router;