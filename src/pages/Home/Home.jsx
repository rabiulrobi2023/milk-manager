import Sidebar from "../SharedPages/Sidebar/Sidebar";
import Topbar from "../SharedPages/Topbar/Topbar";


const Home = () => {


    return (
        <div className="p-2">
            <p className="text-center font-bold text-xl text-yellow-600">Dashboard</p>
            <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-center">

                <div className="w-1/2">
                    <p className="font-bold">Account Info</p>
                    <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>Md Rabiul Islam</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>mdrabi1718@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Account Type</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>Seller</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>Admin</td>
                        </tr>
                    </tbody>
                </div>

                <div>
                    <p className="font-bold">Balance Summary</p>
                    <tbody>
                        <tr>
                            <td>Total Purchase</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>35.00 LTR</td>
                        </tr>
                        <tr>
                            <td>Total Price</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>5000.00 TK</td>
                        </tr>
                        <tr>
                            <td>Total Payment</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>4800.00 TK</td>
                        </tr>
                        <tr>
                            <td>Due</td>
                            <td className="pl-4 pr-2">:</td>
                            <td>200.00 TK</td>
                        </tr>
                    </tbody>

                </div>

            </div>
        </div>
    );
};

export default Home;