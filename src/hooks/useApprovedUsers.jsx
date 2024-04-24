import { useQuery } from '@tanstack/react-query';
import useAxiosGeneral from './useAxiosGeneral';

const useApprovedUsers = () => {
    
    const axiosGeneral=useAxiosGeneral()
    const url = "/approved-users";

    const {data:approvedUsers, isLoading, refetch}=useQuery({
    
        queryKey:["approvedUsers"],
        queryFn: async ()=>{
            const res=await axiosGeneral(url,{
                params:{
                    status:"approved"
                }              
            })
            return res;
            
        }
    })
    return {approvedUsers,isLoading,refetch}
};

export default useApprovedUsers;