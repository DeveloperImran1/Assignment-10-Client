import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

// Slider

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../../src/App.css';

// import required modules
import { EffectCards } from 'swiper/modules';



const AllTouristSpot = () => {
    const allTouristSpots = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }
    return (
        <div>

            <a rel="noopener noreferrer" href="#" className="flex mb-16  gap-[20%] items-center justify-between dark:bg-gray-50">
                {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" /> */}
                <div className="ml-[65px]" >
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <div className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">

                            {
                                allTouristSpots.map(spot =>
                                    <div key={spot._id} >
                                        <SwiperSlide>
                                            <img src={spot.image || "https://i.ibb.co/dPSQVRJ/404.jpg"}alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />

                                        </SwiperSlide>
                                    </div>
                                )
                            }

                        </div>
                 
                    </Swiper>
                </div>
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl mb-5 font-semibold sm:text-4xl group-hover:underline group-focus:underline">Find Your Ideal Tourist Spot</h3>
                    <p> Explore rich cultures, stunning landscapes, and historic sites. Start your journey today and unlock unforgettable experiences around the globe.</p>
                </div>
            </a>


            <div className="grid grid-cols-3">
                {
                    allTouristSpots.map(spot => <AllTouristSpotCard key={spot._id} spot={spot} ></AllTouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;



