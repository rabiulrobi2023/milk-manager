import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithIdPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)

        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginWithIdPass,
        logout,

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;