import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-[95%] lg:max-w-[85%] mx-auto ">
                <div className="fixed z-10 w-[1150px]   shadow-lg">
                    <Navbar></Navbar>
                </div>
                
                <div className="pt-[140px]">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;