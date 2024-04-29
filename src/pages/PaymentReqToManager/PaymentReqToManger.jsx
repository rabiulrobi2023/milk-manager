import PaymentRequests from "../../component/PaymentRequests/PaymentRequests";
import usePaymentRequestToManger from "../../hooks/usePaymentRequestToManager";

const PaymentReqToManger = () => {

    const { paymentRequestToManger, isLoading, refetch } = usePaymentRequestToManger()

    return (
        <>
            {
                <PaymentRequests  requests={paymentRequestToManger} isLoading={isLoading} refetch={refetch} title="Payment Requests"></PaymentRequests>
            }


        </>
    );
};

export default PaymentReqToManger;