import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const authContext = createContext(null)
const auth= getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password)=>{
        console.log(email,password)
      
        return createUserWithEmailAndPassword(auth,email, password)
    }
    

    const authInfo = {
        user,
        createUser,
        loading,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;