import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const TouristSpotUpdate = () => {
    const spotData = useLoaderData();
    const {country_Name, image, name, email, tourists_spot_name, _id } = spotData;
    console.log(_id)

    
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
        const U_name = form.name.value;
        const U_email = form.email.value;
        const U_image = form.image.value;
        const U_tourists_spot_name = form.tourists_spot_name.value;
        const U_average_cost = form.average_cost.value;
        const U_seasonality = form.seasonality.value;
        const U_totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const U_country_Name = form.country_Name.value;
        const U_location = form.location.value;
        const U_shortDescription = form.shortDescription.value;
        const U_travel_time = form.travel_time.value;

        const UpdateInfo = {U_name, U_email, U_image, U_tourists_spot_name, U_average_cost, U_seasonality, U_totalVisitorsPerYear, U_country_Name, U_location, U_shortDescription, U_travel_time};
        console.log(UpdateInfo)

        fetch(`http://localhost:5000/touristSpot/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                successfullyUpdated()
            }
            else{
                errorUpdated()
            }
        })
    }
    return (
        <div>
            <h1>Tourist UPdate Page</h1>

            <form onSubmit={handleUpdate} className="space-y-6 w-[40%] mx-auto border-2 p-5 rounded-lg">
                    <div className="relative w-[100%] rounded-[10px]">
                        <input  className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="name" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Name
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="email" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Email
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input defaultValue={image} className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="image" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Image
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input defaultValue={tourists_spot_name} className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="tourists_spot_name" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Tourists Spot Name
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="average_cost" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Average Cost

                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="seasonality" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Seasonality
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="travel_time" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Travel Time
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="totalVisitorsPerYear" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Total Visitors Per Year
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input defaultValue={country_Name} className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="country_Name" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Country Name
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="location" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Location
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="shortDescription" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Short Description
                        </label>
                    </div>

                    {/* Sign in Button */}
                    <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Update
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>
        </div>
    );
};

export default TouristSpotUpdate;