import PaymentRequest from "../PaymentRequest/PaymentRequest";



const PaymentRequests = ({ requests, title, isLoading, refetch }) => {
    if(isLoading){
        return  <p className="loading loading-spinner text-error text-center mx-auto flex mt-20 absolute left-[50%] right-[50%] tran"></p>
        

    }


    return (
        
        <div >
            
            {
                requests?.length === 0 ?
                    <div className="flex flex-col m-auto  h-[calc(100vh-100px)] items-center justify-center">
                        <div className="space-y-3">
                            <img src="https://i.ibb.co/SJzFQLm/empty.png" alt="" className="w-20 h-20 flex m-auto" />
                            <p className="text-center">There is no any {title}</p>
                        </div>
                    </div>

                    :
                    <div className="overflow-x-auto p-5">
                    

                        <p className="text-center font-bold mb-2 underline text-lg text-gray-600">New {title}</p>
                        <table className="table table-xs table-pin-rows table-pin-cols">

                            <thead className="file:text-center font-bold text-gray-800">
                                <tr className="h-10 bg-colorBase  text-center z-0">
                                    <td className="border-[1px]">SL <br />No</td>
                                    <td className="border-[1px]">Payment Date</td>
                                    <td className="border-[1px] ">Payer Name</td>
                                    <td className="border-[1px]">Payer Email</td>
                                    <td className="border-[1px]">Amount</td>
                                    <td className="border-[1px]">Payer Type</td>
                                    <td className="border-[1px] " colSpan={2}>Action</td>

                                </tr>
                            </thead>
                            <tbody>

                                <>
                                    {
                                        requests?.map((request, index) => <PaymentRequest key={request._id} request={request} refetch={refetch} index={index}></PaymentRequest>)
                                    }
                                </>
                            </tbody>

                        </table>
                    </div>
            }

        </div>
    );
};

export default PaymentRequests;