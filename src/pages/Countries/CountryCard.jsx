import { Link } from "react-router-dom";

const CountryCard = ({ country, index }) => {
    const { _id, name, email, image, tourists_spot_name, average_cost, seasonality, totalVisitorsPerYear, country_Name, location, shortDescription, travel_time, photoURLAuthor } = country;

    console.log("index number: ", index, country)
    return (
        <div>

            <div className="h-[500px] w-[100%] bg-no-repeat bg-cover rounded-2xl relative " style={{ backgroundImage: ` url(${image})` }} >
                <div className={`w-[45%] h-[343px] p-[45px] bg-[#FFFFFFCC] rounded-2xl absolute ${index % 2 === 0 ? 'top-[80px] right-[70px]' : 'top-[80px] left-[70px]'}`} >

                    <div className="flex gap-[18pxpx] items-center justify-between " >
                        <div className="flex gap-2 justify-center items-center" >
                            <svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M9 -0.75C3.61 -0.75 -0.75 3.61 -0.75 9C-0.75 14.38 3.61 18.75 9 18.75C14.38 18.75 18.75 14.38 18.75 9C18.75 3.61 14.38 -0.75 9 -0.75ZM9.75 3C9.75 2.8 9.67 2.61 9.53 2.46C9.38 2.32 9.19 2.25 9 2.25C8.8 2.25 8.61 2.32 8.46 2.46C8.32 2.61 8.25 2.8 8.25 3L8.25 9C8.25 9.41 8.58 9.75 9 9.75L13.5 9.75C13.69 9.75 13.88 9.67 14.03 9.53C14.17 9.38 14.25 9.19 14.25 9C14.25 8.8 14.17 8.61 14.03 8.46C13.88 8.32 13.69 8.25 13.5 8.25L9.75 8.25L9.75 3Z" fill="#FF5400" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className="text-[16px] font-normal" >{travel_time || "7"} Days </p>
                        </div>
                        <div className="flex gap-2 justify-center items-center" >
                            <svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M5.25 3.75C5.25 2.75 5.64 1.8 6.34 1.09C7.05 0.39 8 0 9 0C9.99 0 10.94 0.39 11.65 1.09C12.35 1.8 12.75 2.75 12.75 3.75C12.75 4.74 12.35 5.69 11.65 6.4C10.94 7.1 9.99 7.5 9 7.5C8 7.5 7.05 7.1 6.34 6.4C5.64 5.69 5.25 4.74 5.25 3.75ZM12.75 6.75C12.75 5.95 13.06 5.19 13.62 4.62C14.19 4.06 14.95 3.75 15.75 3.75C16.54 3.75 17.3 4.06 17.87 4.62C18.43 5.19 18.75 5.95 18.75 6.75C18.75 7.54 18.43 8.3 17.87 8.87C17.3 9.43 16.54 9.75 15.75 9.75C14.95 9.75 14.19 9.43 13.62 8.87C13.06 8.3 12.75 7.54 12.75 6.75ZM-0.75 6.75C-0.75 5.95 -0.44 5.19 0.12 4.62C0.69 4.06 1.45 3.75 2.25 3.75C3.04 3.75 3.8 4.06 4.37 4.62C4.93 5.19 5.25 5.95 5.25 6.75C5.25 7.54 4.93 8.3 4.37 8.87C3.8 9.43 3.04 9.75 2.25 9.75C1.45 9.75 0.69 9.43 0.12 8.87C-0.44 8.3 -0.75 7.54 -0.75 6.75ZM3.31 12.11C3.91 11.16 4.76 10.37 5.75 9.82C6.75 9.28 7.86 8.99 9 9C9.94 8.99 10.88 9.19 11.75 9.58C12.62 9.97 13.39 10.53 14.03 11.24C14.66 11.95 15.14 12.78 15.43 13.69C15.72 14.59 15.81 15.55 15.7 16.49C15.69 16.61 15.65 16.72 15.59 16.82C15.52 16.92 15.43 17 15.33 17.06C13.4 18.17 11.22 18.75 9 18.75C6.69 18.75 4.53 18.13 2.66 17.06C2.56 17 2.47 16.92 2.4 16.82C2.34 16.72 2.3 16.61 2.29 16.49C2.12 14.96 2.48 13.41 3.31 12.11L3.31 12.11Z" fill="#FF5400" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>

                            <p className="text-[16px] font-normal" >{totalVisitorsPerYear || "80050"}  </p>
                        </div>
                        <div className="flex gap-2 justify-center items-center" >
                            <svg width="17.000000" height="20.000000" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M7.54 19.35L7.6 19.39L7.63 19.4C7.74 19.46 7.87 19.49 7.99 19.49C8.12 19.49 8.24 19.46 8.36 19.4L8.38 19.39L8.45 19.35C8.85 19.11 9.23 18.87 9.6 18.6C10.56 17.93 11.46 17.16 12.28 16.32C14.23 14.33 16.25 11.34 16.25 7.5C16.25 5.31 15.38 3.21 13.83 1.66C12.28 0.11 10.18 -0.75 8 -0.75C5.81 -0.75 3.71 0.11 2.16 1.66C0.61 3.21 -0.25 5.31 -0.25 7.5C-0.25 11.34 1.76 14.33 3.71 16.32C4.53 17.16 5.43 17.93 6.39 18.6C6.76 18.87 7.14 19.11 7.54 19.35ZM8 10.5C8.79 10.5 9.55 10.18 10.12 9.62C10.68 9.05 11 8.29 11 7.5C11 6.7 10.68 5.94 10.12 5.37C9.55 4.81 8.79 4.5 8 4.5C7.2 4.5 6.44 4.81 5.87 5.37C5.31 5.94 5 6.7 5 7.5C5 8.29 5.31 9.05 5.87 9.62C6.44 10.18 7.2 10.5 8 10.5Z" fill="#FF5400" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className="text-[16px] font-normal" >{country_Name || "Joypurhat"}</p>

                        </div>
                    </div>

                    <h1 className="text-[24px] font-extrabold mt-[24px] mb-4 " >{tourists_spot_name}</h1>
                    <p className="text-[#5A5A5D] w-[80%] " >{shortDescription}</p>
                    <h1 className="font-extrabold text-[20px] text-[#FF5400] my-6  " >Price: {average_cost || "$13-$18"} </h1>
                    <Link to={`/country/${country_Name}`} >
                        <button className="bg-[#FF5400] text-white rounded-[8px] py-3 px-6 " >More Spots</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CountryCard;