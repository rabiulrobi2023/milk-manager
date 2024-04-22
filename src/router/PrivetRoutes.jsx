import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/Auth/useAuth";


const PrivetRoutes = ({children}) => {
   const {user,loading} = useAuth()
   if(loading){
    return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20"></p>
   }
   if(user){
    return children
   }

    return <Navigate to="/"></Navigate>
};

export default PrivetRoutes;