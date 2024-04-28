import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
// react tostify
import toast from "react-hot-toast";

 // alert message 
 const errorMessage = ()=> toast.error("Empty field is Not Alowed")

const AddTouristSpot = () => {
    const { loading, user } = useContext(AuthContext);
    const navigate = useNavigate();

   
    // for slider
    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const sliderImages = ['https://source.unsplash.com/500x500/?nature/?1', 'https://source.unsplash.com/500x500/?nature/?3', 'https://source.unsplash.com/500x500/?nature/?5', 'https://source.unsplash.com/500x500/?nature/?2', 'https://source.unsplash.com/500x500/?nature/?4'];
    const prevSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));
    };
    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
    }, [sliderImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider, currentSlider]);

   

    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }
    const currentUserEmail = user?.email;
    const currentUserName = user?.displayName;
   

    // sweet alert
    const successfullyPost = () => {
        Swal.fire({
            title: "Good job!",
            text: "You Successfully Post !",
            icon: "success"
        });

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

        const photoURLAuthor = user.photoURL;

        const newTouristSpot = { photoURLAuthor, name, email, image, tourists_spot_name, average_cost, seasonality, totalVisitorsPerYear, country_Name, location, shortDescription, travel_time };
        console.log(newTouristSpot)


        // Validation form
        if (!tourists_spot_name.length || !image.length || !average_cost.length || !country_Name.length || !photoURLAuthor.length || !name.length || !email.length ) {
            return errorMessage();
        }
     

        fetch("http://localhost:5000/addTouristSpot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successfullyPost()
                    console.log(data)
                    form.reset()
                }

            })
    }




    return (
        <div>

            <div className="w-full p-8  rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-black mb-3 ">Add Tourist Spot</h1>
                <p className="text-center text-black" > Wellcome Our Touris spot website. You Can Add More Tourist Spots of few information. Folow the form</p>


                <div className="flex justify-between items-start mt-[50px] " >
                    <div className="relative  w-[48%]">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="absolute -left-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="absolute -right-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button>
                        <div className="w-full  overflow-hidden">
                            {/* slider container */}
                            <div className="flex transform-gpu duration-500 ease-linear" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                                {/* sliders */}
                                {sliderImages.map((slide, inx) => (
                                    <img width={400} height={400} key={inx} src={slide} className="mx-[2.5%] h-full min-w-[95%] rounded-2xl border-8 border-transparent object-cover" alt={`Slider - ${inx + 1}`} />
                                ))}
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-6 text-[#1B8EF8] " >

                        <input name="tourists_spot_name" placeholder="Tourists Spot Name" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                        <input name="image" placeholder="Image" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                        <div className="flex gap-3 justify-between" >
                            <input name="average_cost" placeholder="Average Cost" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="number" />
                            <input name="travel_time" placeholder="Travel Time 7 Days" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="number" />

                        </div>
                        <div className="flex  gap-3 justify-between" >
                            <input name="totalVisitorsPerYear" placeholder="Total Visitor Per Year" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                            <input name="location" placeholder="Location" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                        </div>
                        <div className="flex gap-3 justify-between" >

                            <select name="country_Name" className="select select-info w-full max-w-xs  ">
                                <option disabled selected>Conutry Name</option>
                                <option className="mb-2" >Bangladesh</option>
                                <option className="mb-2" >Thailand</option>
                                <option className="mb-2" >Indonesia</option>
                                <option className="mb-2" >Malaysia</option>
                                <option className="mb-2" >Vietnam</option>
                                <option className="mb-2" >Cambodia</option>

                            </select>
                            <select name="seasonality" className="select select-info w-full max-w-xs  ">
                                <option disabled selected>Seasonality</option>
                                <option className="mb-2" >Summer</option>
                                <option className="mb-2" >Winter</option>
                            </select>
                        </div>
                        <div className="flex gap-3 justify-between" >

                            <input name="name" value={currentUserName} placeholder="Name" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                            <input name="email" value={currentUserEmail} placeholder="Email" className="rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />

                        </div>
                        <textarea name="shortDescription" placeholder="Short Description" className="w-full textarea textarea-info" ></textarea>

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

        </div>
    );
};

export default AddTouristSpot;



