import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosGeneral from './useAxiosGeneral';


const useCurrentUserFromDB= () => {
    const axiosGeneral=useAxiosGeneral()
    const{user}=useAuth()
   
   
    
    
    const {data:currentUserInDB, refetch, isLoading}=useQuery({
        queryKey:["currentUserInDB"],
        queryFn: async ()=>{
            const res = await axiosGeneral(`/users?email=${user.email}`)
            return res.data
        }
    })

    return {currentUserInDB,refetch,isLoading}
};

export default useCurrentUserFromDB;