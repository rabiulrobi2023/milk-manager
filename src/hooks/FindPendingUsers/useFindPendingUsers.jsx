import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "../Axios/useAxiosGeneral";


const useFindPendingUsers= (url,criteria) => {
    
    const axiosGeneral=useAxiosGeneral()
    const {data:foundUsersInDB, isLoading,refetch}=useQuery({
        queryKey:["findUsersFromDB"],
        queryFn: async ()=>{
            const res= await axiosGeneral.get(url,{
                params:criteria
            })
           
            return res.data
        }
        
    })
    
    return {foundUsersInDB,isLoading,refetch}
 
};

export default useFindPendingUsers;