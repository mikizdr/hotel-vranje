// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

import { BiPhoneCall } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { heroSlides } from './heroSlides';

const HeroSection = () => {
    return (
        <div className="">
            <Swiper
                centeredSlides
                navigation
                speed={3000}
                autoplay={{ delay: 10000, disableOnInteraction: true }}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                {heroSlides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className={`w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] 
              bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0`}
                            style={{ backgroundImage: `url('${slide.bg}')` }}
                            data-aos="fade-down"
                        >
                            <div className="font-Garamond 2xl:w-[720px] text-center">
                                {/* Stars */}
                                <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                                        />
                                    ))}
                                </div>
                                <h4 className="text-base mb-4">{slide.title}</h4>
                                <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                                        {slide.title1}
                                    </h1>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                                        {slide.title2}
                                    </h1>
                                </div>
                                <a href={slide.link}>
                                    <button className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase">
                                        {slide.buttonText}
                                    </button>
                                </a>
                            </div>
                            {/* Contact info */}
                            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
                                <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> {slide.phone}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
