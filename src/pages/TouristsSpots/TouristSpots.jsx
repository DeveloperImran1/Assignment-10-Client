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
        fetch(`http://localhost:5000/allTouristSpot`)
            .then(res => res.json())
            .then(data => {
                setTourists(data)
            })
    }, [])
    console.log(tourists)

    return (
        <div className="mt-[100px]">
            <h1 className="text-3xl font-bold text-center text-black mb-3 ">Popular Tourist Spots</h1>
            <div className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[75%] mt-3 mb-11 " >Explore iconic landmarks like the Eiffel Tower in Paris, the Great Wall of China, and the breathtaking Grand Canyon. Delve into history at Romes Colosseum</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]" >
                {
                    tourists.slice(0, 6).map(tourist => <TouristSpotCard key={tourist._id} tourist={tourist} ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;