import { useQuery } from "@tanstack/react-query";
import useCurrentUserFromDB from "./useCurrentUserFromDB";
import useAxiosGeneral from "./useAxiosGeneral";



const useTotalPurIndi = () => {
    const axiosGeneral = useAxiosGeneral()
    const {currentUserInDB,isLoading}=useCurrentUserFromDB()
   
    const {data:totalPurIndi}= useQuery({
        queryKey:["totalPurIndi"],
        queryFn:async ()=>{
            const res = await axiosGeneral.get(`/exports/email?email=${currentUserInDB?.email}`)
            return res.data
        }
    })
   
    return {totalPurIndi,isLoading}
};

export default useTotalPurIndi;