import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/Main/MainLayout";
import BuyMilk from "../pages/BuyMilk/BuyMilk";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/buy",
          element:<BuyMilk></BuyMilk>
        }
      ]
      
       
    },
  ]);
  export default router;