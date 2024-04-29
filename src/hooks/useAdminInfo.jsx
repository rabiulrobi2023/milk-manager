import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "./useAxiosGeneral";


const useAdminInfo = () => {
    const axiosGeneral=useAxiosGeneral()
    const {data:adminInfo}=useQuery({
        queryKey:["adminInfo"],
        queryFn:async ()=>{
            const res= await axiosGeneral.get("/admin",{
                params:{
                    role:"admin"
                }
            })
            return res.data   
        }
    })
    return adminInfo;
};

export default useAdminInfo;