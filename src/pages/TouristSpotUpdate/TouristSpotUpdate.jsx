import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const TouristSpotUpdate = () => {
    const { loading } = useContext(AuthContext);
    const spotData = useLoaderData();
    const { _id, name, email, image, tourists_spot_name, average_cost, seasonality, totalVisitorsPerYear, country_Name, location, shortDescription, travel_time, photoURLAuthor } = spotData;

   


    // sweet alert
    const successfullyUpdated = () => {
        Swal.fire({
            title: "Good job!",
            text: "Your Post Successfully Updated !",
            icon: "success"
        });

    }

    const errorUpdated = () => {
        Swal.fire({
            title: "Opps!",
            text: "Please Edit Any Data !",
            icon: "error"
        });

    }

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const U_name = name;
        const U_email = email;
        const U_image = form.image.value;
        const U_tourists_spot_name = form.tourists_spot_name.value;
        const U_average_cost = form.average_cost.value;
        const U_seasonality = form.seasonality.value;
        const U_totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const U_country_Name = form.country_Name.value;
        const U_location = form.location.value;
        const U_shortDescription = form.shortDescription.value;
        const U_travel_time = form.travel_time.value;

        const UpdateInfo = { U_image, U_name, U_email, U_tourists_spot_name, U_average_cost, U_seasonality, U_totalVisitorsPerYear, U_country_Name, U_location, U_shortDescription, U_travel_time };
        console.log(UpdateInfo)

        fetch(`https://assignment-ten-server-side-indol.vercel.app/touristSpot/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    successfullyUpdated()
                    form.reset()
                }
                else {
                    errorUpdated()
                }
            })
    }


    if (loading) {
        return <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)]">
            <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>
        </div>

    }

    return (

        <div className="w-full p-8  rounded-xl border bg-white   font-sans mx-auto">
             <Helmet>
                <title>TravelsBook || PostUpdate </title>
            </Helmet>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-3 ">If You Need Update Your Post?</h1>
            <div className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[90%] lg:w-[75%] mt-3 mb-11 " >Stay connected with our vibrant community in the Post Update section. Share your latest travel adventures, tips, and photos from around the globe.</p>

            </div>

            <div className="relative  h-[640px] rounded-2xl w-[100%] bg-cover bg-opacity-20 flex items-center justify-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/kMnyjHY/Rectangle-5.png')" }} >

                <form onSubmit={handleUpdate} className="space-y-6 text-white border-2 border-[#ffffff] p-5 rounded-2xl " >

                    <input name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Tourists Spot Name" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                    <input name="image" placeholder="Image" defaultValue={image} className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                    <div className="flex gap-3 justify-between" >
                        <input name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="number" />
                        <input name="travel_time" defaultValue={travel_time} placeholder="Travel Time 7 Days" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="number" />

                    </div>
                    <div className="flex  gap-3 justify-between" >
                        <input name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total Visitor Per Year" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                        <input name="location" defaultValue={location} placeholder="Location" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                    </div>
                    <div className="flex gap-3 justify-between" >

                        <select name="country_Name" defaultValue={country_Name} className="select select-info rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2 ">
                            <option disabled selected>Conutry Name</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Bangladesh</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Thailand</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Indonesia</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Malaysia</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Vietnam</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Cambodia</option>

                        </select>
                        <select name="seasonality" defaultValue={seasonality} className="select select-info rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2 ">
                            <option disabled selected>Seasonality</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Summer</option>
                            <option className="mb-2 rounded-lg border w-full  bg-gray-100 text-black " >Winter</option>


                        </select>

                    </div>

                    <textarea name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="rounded-lg border w-full border-[#ffffff] bg-transparent px-4 py-2 text-[#ffffff] ring-offset-1 duration-200 focus:outline-none focus:ring-2 textarea textarea-info" ></textarea>

                    <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#FF5400] text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Update
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-[#FF5400] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-[#FF5400] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-[#FF5400] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-[#FF5400] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>


            </div>


        </div>

    );
};

export default TouristSpotUpdate;