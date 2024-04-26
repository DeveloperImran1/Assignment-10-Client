import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-[95%] lg:max-w-[85%] mx-auto ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;