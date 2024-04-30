import { Outlet } from "react-router-dom";
import NavBar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-[100%] lg:max-w-[85%] mx-auto ">
                <div className="w-[100%]   ">
                    <NavBar></NavBar>
                </div>
                
                <div className="pt-[40px]">
                <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;