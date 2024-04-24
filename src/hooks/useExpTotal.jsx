import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "./useAxiosGeneral";


const useExpTotal = () => {

    const axiosGeneral = useAxiosGeneral()
    const { data: exportTotal, isLoading, refetch } = useQuery({
        queryKey: ["exportTotal"],
        queryFn: async () => {
            const res = await axiosGeneral.get("/exports")
            return res.data
        }

    });
    return { exportTotal, isLoading, refetch }
};

export default useExpTotal;