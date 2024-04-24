
import useAxiosGeneral from './useAxiosGeneral';
import { useQuery } from '@tanstack/react-query';

const useImpTotal = () => {
    const axiosGeneral=useAxiosGeneral()
    const { data: importTotal, isLoading, refetch } = useQuery({
        queryKey: ["importTotal"],
        queryFn: async () => {
            const res = await axiosGeneral.get("/imports")
            return res.data      
        }
        
    });
    return { importTotal, isLoading, refetch }
};

export default useImpTotal;