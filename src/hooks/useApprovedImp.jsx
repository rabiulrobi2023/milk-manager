
import useAxiosGeneral from './useAxiosGeneral';
import { useQuery } from '@tanstack/react-query';

const useApprovedImp = () => {
    const axiosGeneral=useAxiosGeneral()
    const { data: approvedImp, isLoading, refetch } = useQuery({
        queryKey: ["importTotal"],
        queryFn: async () => {
            const res = await axiosGeneral.get("/imports",{
               params:{
                status:"approved"
               }
               
            })
            const {impTotalTk,impTotalAmount,importerInfo}=res.data
            return {impTotalTk,impTotalAmount,importerInfo}
         
                
        }
    
        
    });


    return { approvedImp, isLoading, refetch }
};

export default useApprovedImp;