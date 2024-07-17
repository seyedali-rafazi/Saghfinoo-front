import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

interface SwiperType {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spaceBetween?: number;
  slidesPerView?: number;
}

const SaghfinooSwiper: React.FC<SwiperType> = ({
  children,
  sm = 1,
  md = 2,
  lg = 2,
  xl = 3,
  spaceBetween = 20,
  slidesPerView = 1,
}) => {
  return (
    <div className="flex">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        breakpoints={{
          450: {
            slidesPerView: sm,
            spaceBetween: spaceBetween,
          },
          600: {
            slidesPerView: md,
            spaceBetween: spaceBetween,
          },
          768: {
            slidesPerView: lg,
            spaceBetween: spaceBetween,
          },
          1024: {
            slidesPerView: xl,
            spaceBetween: spaceBetween,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SaghfinooSwiper;
