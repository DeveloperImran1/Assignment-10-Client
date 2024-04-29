import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { AuthContext } from "../../AuthProvider/AuthProvider";

const TouristDetails = () => {
    const { id } = useParams();
    const [tourist, setTourist] = useState([])
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://assignment-ten-server-side-indol.vercel.app/touristSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                setTourist(data)
            })
    }, [])
    console.log(tourist)

    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }

    const { _id, name, email, image, tourists_spot_name, average_cost, seasonality, totalVisitorsPerYear, country_Name, location, shortDescription, travel_time, photoURLAuthor } = tourist;

    const listArray = [`Seasonality ${seasonality || "Every Time"} `, `Total Visito Pere Year ${totalVisitorsPerYear || "Lots"} `, `Travel Time ${travel_time || "Not Fixed"}`, `Location ${location}`]
    return (
        <div>
            <div>

                <div className="w-full  p-5 border-2 rounded-2xl">
                    <div className="flex flex-col gap-12 rounded-lg  w-full">
                        <div className="flex justify-between items-center w-full " >
                            <p className=" text-[24px] lg:text-[40px]  font-semibold ">{tourists_spot_name}</p>

                        </div>

                        <div>
                            <img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src={image} />

                        </div>

                        <div className=" flex flex-col lg:flex-row lg:gap-[100px] justify-between items-start" >
                            {/* card  */}
                            <div className=" my-[18px] ml-6 w-full lg:w-[50%] space-y-6   py-8 lg:pl-8  dark:bg-[#18181B]">
                                <div className="flex items-center justify-between">
                                    <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl"><sup className="text-2xl font-black">$</sup>{average_cost}<sub className="text-sm tracking-tight">/person</sub></h1>

                                </div>
                                <p className="font-semibold text-sky-900 dark:text-[#4BB3FF]/90">Country: {country_Name}</p>
                                <ul className="space-y-3">
                                    {
                                        // use your own array
                                        listArray?.map((each, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] " width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g> <g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                                {each}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mr-8">
                                    <button className="w-1/2 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">Add Spot</button>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-base text-gray-500 dark:text-gray-400 my-6 w-[50%] "><span className="text-[20px] font-semibold text-black" >Description:</span> {shortDescription}  </p>
                        </div>

                        {/* author card */}
                        <p className=" text-[24px] lg:text-[40px] text-center font-semibold ">Contact owner of This Spot</p>
                        <div className=" mx-auto my-4 flex flex-col items-center justify-center md:flex-row">
                            <div className="group relative  sm:w-[350px]">
                                <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg bg-black/70" src={photoURLAuthor || "https://i.ibb.co/dPSQVRJ/404.jpg"} alt="card navigate ui" />
                                <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                                <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                                <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                            </div>
                            <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                                <div className="space-y-1">
                                    <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{name || "Anonymus Participant"}</h2>
                                    <p className="font-sans text-gray-500 dark:text-white/70">{email || "ih....an@gmail.com"}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Shots</p>
                                        <p className="text-2xl tracking-wider text-gray-700 dark:text-white/80 lg:text-3xl">23</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Following</p>
                                        <p className="text-2xl tracking-wider text-gray-700 dark:text-white/80 lg:text-3xl">314</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Followers</p>
                                        <p className="text-2xl tracking-wider text-gray-700 dark:text-white/80 lg:text-3xl">487</p>
                                    </div>
                                </div>
                                <div><button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">SEND MESSAGE</button></div>
                            </div>
                        </div>

                        <div className="w-full ">


                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default TouristDetails;

