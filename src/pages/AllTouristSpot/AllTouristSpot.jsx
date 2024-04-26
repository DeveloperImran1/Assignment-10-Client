import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllTouristSpot = () => {
    const allTouristSpots = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }
    return (
        <div>
            <h1>All Tourist Spots</h1>
            <div className="grid grid-cols-3">
                {
                    allTouristSpots.map(spot => <AllTouristSpotCard key={spot._id} spot={spot} ></AllTouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;