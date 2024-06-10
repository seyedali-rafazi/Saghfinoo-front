import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

interface SwiperType {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spaceBetween?: number;
}

const SaghfinooSwiper: React.FC<SwiperType> = ({
  children,
  sm = 1,
  md = 2,
  lg = 2,
  xl = 3,
  spaceBetween = 20,
}) => {
  return (
    <div className="flex">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Keyboard, Pagination, Navigation]}
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
