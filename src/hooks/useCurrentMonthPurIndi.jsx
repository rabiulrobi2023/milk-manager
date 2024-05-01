import { useQueries, useQuery } from "@tanstack/react-query";
import useCurrentUserFromDB from "./useCurrentUserFromDB";
import useAxiosGeneral from "./useAxiosGeneral";


const useCurrentMonthPurIndi = () => {
    const {currentUserInDB}=useCurrentUserFromDB()
    const {_id,email}=currentUserInDB
   
   
    return currentMonthPurIndi
};

export default useCurrentMonthPurIndi;