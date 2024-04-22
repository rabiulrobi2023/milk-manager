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
import PrivetRoutes from "./PrivetRoutes";
import AdminRoutes from "./AdminRoutes";



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
    element: <PrivetRoutes><MainLayout></MainLayout></PrivetRoutes>,
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
        element:<AdminRoutes><Users></Users></AdminRoutes>
      }
    ]


  },
]);
export default router;