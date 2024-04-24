import { createContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "../hooks/useAxiosGeneral";

export const ioContext = createContext(0)
const ImportExportProveder = ({ children }) => {
    const axiosGeneral = useAxiosGeneral()
    const {data:importExport, isLoading, refetch} = useQuery({
        queryKey: ["importExport"],
        queryFn: async () => {
            const res = axiosGeneral.get("/import-export")
            return res.data
        }
    })
    const info = {
        importExport, isLoading, refetch
    }

    return (<ioContext.Provider value={info}>
        {children}


    </ioContext.Provider>)
};

export default ImportExportProveder;