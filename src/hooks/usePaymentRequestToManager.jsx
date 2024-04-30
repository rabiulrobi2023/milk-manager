import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "./useAxiosGeneral";

const usePaymentRequestToManger = () => {
    const axiosGeneral = useAxiosGeneral()
    const { data: paymentRequestToManger, isLoading, refetch } = useQuery({
        queryKey: ["paymentRequestToSeller"],
        queryFn: async() => {
            const res = await axiosGeneral.get("/payment-request-to-manager",
                {
                    params: {
                        receiverRole: "manager",
                        status: "pending",
                        rejected:"no"
                    }
                }
            )
            return res.data
        }
    })
    return {paymentRequestToManger, isLoading, refetch }
};

export default usePaymentRequestToManger;