import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Countries from "../Countries/Countries";
import Pricing from "../Pricing/Pricing";
import TouristSpots from "../TouristsSpots/TouristSpots";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
            <Pricing></Pricing>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;