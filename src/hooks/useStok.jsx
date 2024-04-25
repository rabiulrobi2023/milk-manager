import useExpTotal from "./useExpTotal";
import useApprovedImp from "./useApprovedImp";


const useStock = () => {


    const { approvedImp,refetch}= useApprovedImp()
    const { exportTotal }=  useExpTotal()


    const stock = (approvedImp?.impTotalAmount-exportTotal?.expTotalAmount).toFixed(2);
    
    return {stock}
};

export default useStock;