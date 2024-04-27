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

    // Initialize state variables
    const [theme, setTheme] = useState(() => {
        // Retrieve theme from localStorage on component mount
        const locatTheme = localStorage.getItem("theme");
        // If no theme is found in localStorage, default to dark theme
        // return locatTheme === "dark" ? true : false;
        return locatTheme === "light" ? true : false;
    });

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    }

    useEffect(() => {
        // Store current theme in localStorage
        // localStorage.setItem("theme", theme ? "dark" : "light");
        localStorage.setItem("theme", theme ? "light" : "dark");

        // Apply theme to HTML element
        // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
        document.querySelector('html').setAttribute('data-theme', theme ? "light" : "dark");
    }, [theme]); // Re-run effect when theme changes

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
            <nav className="flex items-center justify-between bg-[#faf5f3] px-4 py-2 text-black pt-[30px]  ">
                {/* <nav className="flex items-center justify-between bg-gradient-to-t from-[#487497] to-[#004e81]  px-4 py-2 text-black pt-[30px]  "> */}

                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
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
                    <NavLink to="/myList" className="hover:text-sky-500" >
                        <li className="group flex  cursor-pointer flex-col  ">
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
                    {/* Theme switcher */}
                    <label className="swap swap-rotate">
                        {/* Hidden checkbox to control theme */}
                        <input type="checkbox" onClick={toggleTheme} checked={theme} className={`theme-controller`} />
                        {/* Sun icon for light theme */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* Moon icon for dark theme */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
                <div>
                    {
                        user ? <div className='flex items-center justify-center gap-4'>


                            <div
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="top"
                                className="relative group">
                                <img className="size-[55px]  bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
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


