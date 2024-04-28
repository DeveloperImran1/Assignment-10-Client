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
        <div>
            <h1>Countries section {countries.length} </h1>

            <div className="grid grid-cols-1 gap-7" >
                {
                    countries.map((country, index) => <CountryCard key={country._id} country={country} index={index} ></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;