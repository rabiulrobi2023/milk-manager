import usePendigImport from "../../hooks/usePendigImport";
import PendingImport from "../PendingImport/PendingImport";


const PendingImports = () => {
    const {pendingImportInfo,importerInfo, isLoading, refetch}=usePendigImport()
   const pendingImporterData = pendingImportInfo?.importerInfo;
   console.log("Data",pendingImporterData)




    if (isLoading) {
        return <p className="loading loading-spinner text-error text-center mx-auto flex mt-20"></p>
    }
    return (

        <div >
            {
                pendingImporterData.length===0?
                    <div className="flex flex-col gap-2  m-auto  h-full pt-10">
                        <img src="https://i.ibb.co/SJzFQLm/empty.png" alt="" className="w-20 h-20 flex m-auto" />
                        <p className="text-center">There is no any supply request</p>
                    </div>

                    :
                    <div className="overflow-x-auto p-5">

                        <p className="text-center font-bold mb-2 underline text-lg text-gray-600">New Supply Request</p>
                        <table className="table table-xs table-pin-rows table-pin-cols">

                            <thead className="file:text-center font-bold text-gray-800">
                                <tr className="h-10 bg-colorBase  text-center z-0">
                                    <td className="border-[1px]">SL <br />No</td>
                                    <td className="border-[1px]">Date</td>
                                    <td className="border-[1px] ">Supplier Name</td>
                                    <td className="border-[1px]">Supplier Email</td>
                                    <td className="border-[1px]">Amount</td>
                                    <td className="border-[1px]">Rate</td>                                 
                                    <td className="border-[1px]">Price</td>
                                    <td className="border-[1px] " colSpan={2}>Action</td>

                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {
                                      pendingImporterData.map((pendingImport, index) => <PendingImport pendingImport={pendingImport} key={pendingImport._id} index={index} refetch={refetch}></PendingImport>)
                                    }
                                </>
                            </tbody>

                        </table>
                    </div>
            }

        </div>


    );
};

export default PendingImports;