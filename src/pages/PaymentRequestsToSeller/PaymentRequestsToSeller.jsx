import PaymentRequests from "../../component/PaymentRequests/PaymentRequests";
import usePaymentRequestToSeller from "../../hooks/usePaymentRequestToSeller";


const PaymentRequestsToSeller = () => {
    const {paymentRequestToSeller, isLoading, refetch }=usePaymentRequestToSeller()
    return (
        <>
         {
            <PaymentRequests requests={paymentRequestToSeller} isLoading={isLoading} refetch={refetch} title={"Payment Request"}></PaymentRequests>
        }
        </>
        
       
    );
};

export default PaymentRequestsToSeller;