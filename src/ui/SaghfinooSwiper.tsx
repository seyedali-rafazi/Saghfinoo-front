import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
interface SwiperType {
  children: React.ReactNode;
}

const SaghfinooSwiper: React.FC<SwiperType> = ({ children }) => {
  return (
    <div className="flex">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Keyboard, Pagination, Navigation]}
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SaghfinooSwiper;
