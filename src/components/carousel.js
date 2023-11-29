"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import Slide from "./slide";
import { slides } from "@/constants";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="text-gray-600"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide key={slide.text} icon={slide.icon} text={slide.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
