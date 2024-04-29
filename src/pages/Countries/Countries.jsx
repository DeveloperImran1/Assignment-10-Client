import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        fetch(`https://assignment-ten-server-side-indol.vercel.app/countriesCollection`)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])
    console.log(countries)

    return (
        <div className="mt-[96px]" >
            <div className="flex flex-col items-center justify-center" >

                <h1 className="text-xl mg:text-2xl lg:text-3xl font-bold text-center text-black mb-3 ">Popular Spots in Countries</h1>

                <div className="flex flex-col items-center justify-center" >
                    <p className="text-center text-black w-[75%] mt-3 mb-11 " >Explore iconic landmarks like the Eiffel Tower in Paris, the Great Wall of China, and the breathtaking Grand Canyon. Delve into history at Romes Colosseum</p>

                </div>

            </div>

            <div className="grid grid-cols-1 gap-7" >
                {
                    countries.map((country, index) => <CountryCard key={country._id} country={country} index={index} ></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;