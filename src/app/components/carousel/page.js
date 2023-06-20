"use client";
import {
    SiFlutter,
    SiExpress,
    SiMongodb,
    SiAngular,
    SiSpring,
    SiGraphql,
    SiFlask,
    SiOracle,
    SiAdobexd,
    SiTailwindcss,
    SiBootstrap
} from "react-icons/si";
import { FaSymfony, FaJava, FaReact, FaYarn, FaNpm } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';

const Carousel = () => {


    return (
        <>
            <Swiper
                spaceBetween={32}
                slidesPerView={5}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => console.log(swiper)}
                className="text-gray-600"  >
                <SwiperSlide> <SiFlutter className="text-3xl sm:text-4xl md:text-7xl hover:text-cyan-500" /> </SwiperSlide>
                <SwiperSlide> <SiExpress className="text-3xl sm:text-4xl md:text-7xl hover:text-black" /> </SwiperSlide>
                <SwiperSlide> <SiMongodb className="text-3xl sm:text-4xl md:text-7xl hover:text-green-400" /> </SwiperSlide>
                <SwiperSlide> <SiAngular className="text-3xl sm:text-4xl md:text-7xl hover:text-red-500 " /> </SwiperSlide>
                <SwiperSlide> <SiSpring className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" /> </SwiperSlide>
                <SwiperSlide> <SiGraphql className="text-3xl sm:text-4xl md:text-7xl hover:text-pink-400" /> </SwiperSlide>
                <SwiperSlide> <SiFlask className="text-3xl sm:text-4xl md:text-7xl hover:text-black" /> </SwiperSlide>
                <SwiperSlide> <FaJava className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-400" /></SwiperSlide>
                <SwiperSlide> <FaSymfony className="text-3xl sm:text-4xl md:text-7xl  hover:text-black" /></SwiperSlide>
                <SwiperSlide> <GrMysql className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-600" /></SwiperSlide>
                <SwiperSlide> <SiOracle className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-600" /></SwiperSlide>
                <SwiperSlide> <SiTailwindcss className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" /></SwiperSlide>
                <SwiperSlide> <FaReact className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-500" /></SwiperSlide>
                <SwiperSlide> <FaYarn className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" /></SwiperSlide>
                <SwiperSlide> <FaNpm className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-400" /></SwiperSlide>
                <SwiperSlide> <SiAdobexd className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-500" /></SwiperSlide>
                <SwiperSlide> <SiBootstrap className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-800" /></SwiperSlide>
            </Swiper>

        </>
    )
}

export default Carousel
