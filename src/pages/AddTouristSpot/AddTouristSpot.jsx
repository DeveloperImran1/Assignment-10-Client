import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddTouristSpot = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const travel_time = form.travel_time.value;

        const newTouristSpot = { name, email, image, tourists_spot_name, average_cost, seasonality, totalVisitorsPerYear, country_Name, location, shortDescription, travel_time };
        console.log(newTouristSpot)

        fetch("http://localhost:5000/addTouristSpot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>



            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
                {/* Input fields and the form started */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="name" placeholder="" />
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
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="image" placeholder="" />
                        <label className="absolute w-full rounded-[10px] left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="navigate_ui_input_55">
                            Image
                        </label>
                    </div>
                    <div className="relative w-[100%] rounded-[10px]">
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="tourists_spot_name" placeholder="" />
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
                        <input className="peer rounded-[10px] w-full h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" id="navigate_ui_input_55" name="country_Name" placeholder="" />
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
                        Add Now
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

        </div>
    );
};

export default AddTouristSpot;