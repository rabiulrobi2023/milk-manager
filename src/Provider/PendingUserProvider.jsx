import { createContext, useState } from "react";

export const pendingUserContext= createContext(null)

const PendingUserProvider = ({children}) => {
    // const [pendingUsers, setPendingUsers]=useState(0)
    const [pendingUsers, setPendingUsers] = useState(0);
    const [currentStock,setCurrentStock]=useState(0)

    const info = {
        pendingUsers,
        setPendingUsers,
        currentStock,
        setCurrentStock
    }

    return (
        <pendingUserContext.Provider value={info}>
            {children}
        </pendingUserContext.Provider>
    );
};

export default PendingUserProvider;