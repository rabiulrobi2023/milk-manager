import { Navigate } from "react-router-dom";
import useCurrentUserFromDB from "../hooks/useCurrentUserFromDB";



const AdminRoute = ({children}) => {
    const {currentUserInDB,isLoading}= useCurrentUserFromDB()
    if(isLoading){
        return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20"></p>
    }
   
    if (currentUserInDB.role=="admin"){
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default AdminRoute;