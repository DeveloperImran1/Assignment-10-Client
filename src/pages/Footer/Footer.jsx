import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (

        <footer className="flex flex-col text-[#5A5A5D] bg-[#1313180D] mt-[96px] pb-[40px]">
            <div className="flex flex-col items-start justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="">
                    <NavLink to="/authorProfile"  >
                        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl flex flex-row lg:flex-col justify-center items-center font-semibold text-black transition-all duration-200 hover:scale-110">
                            <img src="https://i.ibb.co/MNmyYSr/Group-40071-2.png" alt="Logo" />
                            <h2 className='text-[30px] font-bold flex ' >Travels<span className='text-[#FF5400]' >Book</span></h2>
                        </div>
                    </NavLink>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <span className="flex gap-[75px]" >
                            <li>
                                <Link to="/" className="cursor-pointer hover:underline">Home</Link>
                            </li>

                            <li >
                                <Link to="/addTouristSpot" className="cursor-pointer hover:underline">Add Spot</Link>
                            </li>
                        </span>
                        <span className="flex gap-[75px]">
                            <li>
                                <Link to="/myList" className="cursor-pointer hover:underline">My List</Link>
                            </li>
                            <li>
                                <Link to="/login" className="cursor-pointer hover:underline">Login</Link>
                            </li>
                        </span>
                        <li>
                            <Link to="/allTouristSpot" className="cursor-pointer hover:underline">All Tourist Spots</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg mt-5 lg:mt-0">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <CgProfile />
                            <a className="cursor-pointer hover:underline">Md Imran</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <MdEmail />
                            <a className="cursor-pointer hover:underline">ih9066588@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaLocationDot />

                            <a className="cursor-pointer hover:underline">Panchbibi, Joypurhat</a>
                        </li>
                    </ul>
                    <nav>
                        <div className="grid grid-flow-col gap-4 mt-5 text-[#FF5400] ">
                            <a href="https://twitter.com/imran9066588" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a href="https://www.youtube.com/channel/UCrvi84j-fAMqUTqUEapT48Q" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a href="https://web.facebook.com/DeveloperImran1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                </nav>
            </div>

            <aside className="text-center w-full border-t border-dotted pt-6 border-[#1b1b1a] " >
                <p>Copyright © 2024 - All right reserved by  <h2 className='text-[#FF5400]'><span className='text-black ' >Travels</span>Book</h2> </p>
            </aside>
        </footer>

    );
};

export default Footer;

