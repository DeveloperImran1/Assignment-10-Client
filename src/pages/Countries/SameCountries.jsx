import { useLoaderData } from "react-router-dom";
import SameCountryCard from "./SameCountryCard";
import DataNotFound from "../ErrorPage/DataNotFound";
import { Helmet } from "react-helmet-async";

const SameCountries = () => {
    const countries = useLoaderData();
    console.log(countries)

    if(!countries.length){
        return <DataNotFound></DataNotFound>
    }
    return (
        <div>
             <Helmet>
                <title>TravelsBook || SpecificCountry </title>
            </Helmet>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-3 ">All Touris Spots in {countries[0]?.country_Name} </h1>
            <div className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[90%] lg:w-[75%] mt-3 mb-11 " >Discover the allure of {countries[0]?.country_Name} spots with its diverse array of tourist spots. Marvel at ancient wonders like immerse yourself in the vibrant culture</p>

            </div>

            <div className="grid grid-cols-1 gap-6 " >
                {
                    countries.map((country, index) => <SameCountryCard key={country._id} country={country} index={index} ></SameCountryCard>)
                }
            </div>
        </div>
    );
};

export default SameCountries;