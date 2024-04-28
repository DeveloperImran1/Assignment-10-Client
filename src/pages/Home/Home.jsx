import Banner from "../Banner/Banner";
import Countries from "../Countries/Countries";
import TouristSpots from "../TouristsSpots/TouristSpots";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;