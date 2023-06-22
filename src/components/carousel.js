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
  SiBootstrap,
} from "react-icons/si";
import { FaSymfony, FaJava, FaReact, FaYarn, FaNpm } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

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
        className="text-gray-600 cursor-grab"
      >
        <SwiperSlide>
          <SiFlutter className="text-3xl sm:text-4xl md:text-7xl hover:text-cyan-500" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Flutter
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiExpress className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            ExpressJS
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiMongodb className="text-3xl sm:text-4xl md:text-7xl hover:text-green-400" />{" "}
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            MongoDB
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiAngular className="text-3xl sm:text-4xl md:text-7xl hover:text-red-500 " />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Angular
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiSpring className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" />{" "}
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            SpringBoot
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiGraphql className="text-3xl sm:text-4xl md:text-7xl hover:text-pink-400" />{" "}
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Graphql
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiFlask className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />{" "}
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Flask
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FaJava className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-400" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Java
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FaSymfony className="text-3xl sm:text-4xl md:text-7xl  hover:text-black" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Symfony
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <GrMysql className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-600" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Mysql
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiOracle className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-600" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Oracle
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiTailwindcss className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Tailwindcss
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FaReact className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-500" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            React
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FaYarn className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Yarn
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FaNpm className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-400" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Npm
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiAdobexd className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-500" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            AdobeXD
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SiBootstrap className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-800" />
          <div className="my-5  font-Poppins_SemiBold text-black text-lg sm:text-2xl md:text-xl dark:text-white ">
            Bootstrap
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
