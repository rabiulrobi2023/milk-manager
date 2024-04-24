import useExpTotal from "./useExpTotal";
import useImpTotal from "./useImpTotal";


const useBalanceTotal = () => {
    const { importTotal }= useImpTotal()
    const { exportTotal, isLoading, refetch }=useExpTotal()
    const stock = (importTotal?.impTotalAmount-exportTotal?.expTotalAmount)
    

    return {stock}
};

export default useBalanceTotal;