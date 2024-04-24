import axios from "axios";

const axiosGeneral = axios.create({
    baseURL: 'http://localhost:5000',
});
const useAxiosGeneral = () => {
    return axiosGeneral;
};
export default useAxiosGeneral;