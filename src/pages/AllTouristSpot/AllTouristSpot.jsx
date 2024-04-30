import { Link, useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

// Slider

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";




const AllTouristSpot = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://source.unsplash.com/1200x540/?nature", title: "Find Your Ideal Tourist Spot", des: "Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.", }, { img: "https://source.unsplash.com/1200x540/?hill", title: "Find Your Ideal Tourist Spot", des: "Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.", }, { img: "https://source.unsplash.com/1200x540/?mountain", title: "Find Your Ideal Tourist Spot", des: "Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.", }, { img: "https://source.unsplash.com/1200x540/?river", title: "Find Your Ideal Tourist Spot", des: "Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.", }, { img: "https://source.unsplash.com/1200x540/?sea", title: "Find Your Ideal Tourist Spot", des: "Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.", },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    const [allTouristSpots, setAllTouristSpots] = useState([]);
    const allTouristSpotsLoader = useLoaderData();

    useEffect(() => {
        setAllTouristSpots(allTouristSpotsLoader)
    }, [])

    const { loading } = useContext(AuthContext);


    // dropdown
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    console.log(allTouristSpots)
    // handle  sort
    const highToLow = () => {
        console.log("before", allTouristSpots)
        const sorting = allTouristSpots.sort((a, b) => b.average_cost - a.average_cost);
        setAllTouristSpots(sorting)
        console.log("after", allTouristSpots)

    }
    const lowToHigh = () => {
        const sorting = allTouristSpots.sort((a, b) => a.average_cost - b.average_cost);
        setAllTouristSpots(sorting)

    }

    if (loading) {
        return <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)]">
        <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>
      </div>

    }
    return (
        <div className="" >
            <Helmet>
                <title>TravelsBook || All Spots</title>
            </Helmet>
            <div className=" mb-16 p-7 rounded-3xl relative ">


                <div className="w-full  h-60 sm:h-96 md:h-[500px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear rounded-3xl"
                    style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>

                    <div className="drop-shadow-lg text-white text-center rounded-3xl flex flex-col items-center">
                        <h1 
                        data-aos="flip-left"
                        className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                        <p 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="text-sm md:text-base lg:text-lg w-[70%] mt-[40px] ">{sliders[currentSlider].des}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 p-2">

                    {sliders.map((slide, inx) => (
                        <img onClick={() => setCurrentSlider(inx)} key={inx}
                            src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                            alt={slide.title} />
                    ))}
                </div>

                <div className="absolute left-[35%] lg:left-[60px] -bottom-[45%] lg:-bottom-[90px] " >
                    <div ref={dropDownRef} className="relative mx-auto w-fit text-white bg-[#FF5400] mb-[130px] mt-[20px] lg:-mt-[100px] rounded-lg">
                        <button onClick={() => setOpen((prev) => !prev)} className=" bg-[#FF5400] px-6 py-2 flex gap-1 items-center justify-center font-bold rounded-lg"> <span>Sort By</span> <IoIosArrowDown size={30}></IoIosArrowDown> </button>
                        <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 rounded-sm shadow-md`}>



                            <Link onClick={highToLow} >
                                <li className={`rounded-lg font-medium bg-[#1313130D] text-black p-2 text-center ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-[#59C6D2] hover:text-[#FFFFFF]`}
                                >High Budget</li>
                            </Link>

                            <Link onClick={lowToHigh} >
                                <li className={`rounded-lg font-medium bg-[#1313130D] text-black p-2 text-center ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-[#59C6D2] hover:text-[#FFFFFF]`}
                                >Low Budget</li>
                            </Link>



                        </ul>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    allTouristSpots.map(spot => <AllTouristSpotCard key={spot._id} spot={spot} ></AllTouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;



