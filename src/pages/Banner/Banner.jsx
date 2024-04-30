import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';
import "../../../src/index.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <div className='rounded-[28px] h-[400px] lg:h-[600px] bg-white relative ' >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper rounded-[28px]"
                >
                    <SwiperSlide>
                        <img className='w-full rounded-3xl h-full' src="https://i.ibb.co/Q6nQsbL/blog1arb4-Vjtxhzvy-Uzrt9b-Zzu-I-hl-Est52-F.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full rounded-3xl h-full' src="https://i.ibb.co/6WRX20S/accommodation-singe-1-img-1-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-3xl' src="https://i.ibb.co/5FND6yP/About-50-numbers-of-Royal-Bengal-Tigers-increased-in-the-Sundarbans-scaled.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-3xl' src="https://i.ibb.co/85529M8/65176-city-cityscape-long-exposure-Thailand-Bangkok-Buddhism-light-trails-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full rounded-3xl' src="https://i.ibb.co/tBLzHJ3/11b8ae51-city-6042-1638dab0fe6.jpg" alt="" />
                    </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

            <div className="flex flex-col items-center justify-center absolute left-[35%] lg:left-[6%]  top-[60%]  z-50 text-white " >
                <h1 className='animate__animated animate__fadeInDownBig  text-xl mg:text-2xl lg:text-3xl font-bold text-center -mb-[40px]' >Wellcome!</h1>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-center  mb-3 ">
                    {' '}
                    <span style={{ fontWeight: 'bold' }} className='text-[#FF5400]' >
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Our TravelsBooks Website', 'We Provide World Wide' , "Travels Booking And ", 'All Support for Tourist.', 'If You Find Most Popular Spots in ', 'Bangladesh', 'Thailand', 'Malysia', "Indonesia", "Kambadia", "Vietnam", "Popular Spots Find Now!", "Lets Go!"]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>

                <div className="hidden lg:flex flex-col items-center justify-center" >
                    <p className="text-center  w-[75%] mt-3 mb-11 " >Our TravelsBooks Website We Provide World Wide Travels Booking And All Support for Tourist. If You Find Most Popular Spots in Bangladesh, Thailand, Malysia, Indonesia, Kambadia, Vietnam Popular Spots Find Now! So Lets Go!</p>

                </div>

            </div>
        </div>
    );
};

export default Banner;









