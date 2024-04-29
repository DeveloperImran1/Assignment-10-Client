import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Countries from "../Countries/Countries";
import Pricing from "../Pricing/Pricing";
import TouristSpots from "../TouristsSpots/TouristSpots";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TravelsBook || Home</title>
            </Helmet>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
            <Pricing></Pricing>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;