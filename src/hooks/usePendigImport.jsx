import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "./useAxiosGeneral";


const usePendigImport = () => {
    const axiosGeneral = useAxiosGeneral()
    const { data: pendingImportInfo, isLoading, refetch } = useQuery({
        queryKey: ["pendingImpot"],
        queryFn: async () => {
            const res = await axiosGeneral.get("/imports", {
                params: {
                    status: "pending"
                }
            })
           const {impTotalTk,impTotalAmount,importerInfo}=res.data;
           return {impTotalTk,impTotalAmount,importerInfo}
        }
    })
    return { pendingImportInfo, isLoading, refetch }


};

export default usePendigImport;