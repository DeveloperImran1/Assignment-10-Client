import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpots = () => {
    const [tourists, setTourists] = useState([])
    const { loading } = useContext(AuthContext)
    // if (loading) {
    //     return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    // }

    useEffect(() => {
        fetch(`https://assignment-ten-server-side-indol.vercel.app/allTouristSpot`)
            .then(res => res.json())
            .then(data => {
                setTourists(data)
            })
    }, [])
    console.log(tourists)

    return (
        <div className="mt-[100px]">
            {/* <h1 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black dark:bg-gray-900 dark:text-white mb-3 ">Popular Tourist Spots</h1>
            <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[75%] mt-3 mb-11 dark:bg-gray-100 dark:text-gray-900" >Explore iconic landmarks like the Eiffel Tower in Paris, the Great Wall of China, and the breathtaking Grand Canyon. Delve into history at Romes Colosseum</p>

            </div> */}

            <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-xl md:text-2xl lg:text-3xl font-bold text-center leading-none dark:text-gray-600 mb-3 ">
                Natural Wonders
            </h1>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="flex flex-col items-center justify-center">
                <p className="text-center leading-none dark:text-gray-600 w-[75%] mt-3 mb-11">
                    Natural wonders are awe-inspiring features of the Earths landscape, showcasing its raw beauty. From majestic waterfalls cascading into deep canyons to towering mountain ranges .
                </p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[40px]" >
                {
                    tourists.slice(0, 6).map(tourist => <TouristSpotCard key={tourist._id} tourist={tourist} ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;