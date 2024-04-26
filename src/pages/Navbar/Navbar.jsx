import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'





const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()
    const successfullyRegister = () => {
        Swal.fire({
            title: "Good job!",
            text: "You Successfully Registerd !",
            icon: "success"
        });
        navigate("/")
    }
    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const handleLogout = () => {
        logOut()
            .then(res => {
                successfullyRegister()
                navigate("/login")
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white mb-24">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <h2>Logo</h2>
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <NavLink to="/" >
                    <li className="group flex  cursor-pointer flex-col">
                        Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
                    <NavLink to="/login" >
                    <li className="group flex  cursor-pointer flex-col">
                        Login<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
                    <NavLink to="/register" >
                    <li className="group flex  cursor-pointer flex-col">
                    Register<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
                    <NavLink to="/addTouristSpot" >
                    <li className="group flex  cursor-pointer flex-col">
                    Add Tourist Spot<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
                    <NavLink to="/allTouristSpot" >
                    <li className="group flex  cursor-pointer flex-col">
                    All Tourist Spot<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
                    <NavLink to="/myList" >
                    <li className="group flex  cursor-pointer flex-col">
                    My List<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    </NavLink>
               
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                Home
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Services
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                About
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Contact
                            </li>
                        </ul>
                    )}
                </div>
                <div>
                    {
                        user ? <div className='flex items-center justify-center gap-4'>


                            <div
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="top"
                                className="relative group">
                                <img className="size-[55px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                                <span className="size-4 bg-blue-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                <Tooltip id="my-tooltip" />
                            </div>
                            <button onClick={handleLogout} className='btn btn-secondary' >Logout</button>

                        </div> : <>
                            <Link to="/login"><button className='btn btn-secondary' >LogIn</button></Link>
                            <button onClick={handleLogout} className='btn btn-secondary' >Logout</button>
                        </>
                    }

                </div>
            </nav>

        </div>
    );
};

export default Navbar;


