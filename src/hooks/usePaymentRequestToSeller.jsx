import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "./useAxiosGeneral";

const usePaymentRequestToSeller = () => {
    const axiosGeneral = useAxiosGeneral()
    const { data: paymentRequestToSeller, isLoading, refetch } = useQuery({
        queryKey: ["paymentRequestToSeller"],
        queryFn: async() => {
            const res = await axiosGeneral.get("/payment-request-to-seller",
                {
                    params: {
                        receiverRole: "seller",
                        status: "pending"
                    }
                }

            )
            return res.data
        }
    })
    return {paymentRequestToSeller, isLoading, refetch }
};

export default usePaymentRequestToSeller;