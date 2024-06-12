import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";

const Counseling = [
  {
    id: 1,
    image: "/photos/location.jpg",
    homeType: "امکان خرید و اجاره ملک در اکثر نقاط کشور",
  },
  {
    id: 2,
    image: "/photos/time.jpg",
    homeType: "مقایسه و بررسی صدها ملک براحتی و در کمترین زمان",
  },
  {
    id: 3,
    image: "/photos/connection.jpg",
    homeType: "ارتباط آسان با برترین املاک و مشاورین کشور",
  },
];

const HomeCounseling: React.FC = () => {
  return (
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">همه به شما مشاوره می‌دهند! </h2>
        <h4 className="font-medium text-xl">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </h4>
      </div>
      <SaghfinooSwiper xl={3} lg={3}>
        {Counseling.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="flex flex-col justify-center items-center rounded-lg border border-gray-200 max-w-56 min-h-52 p-5">
              <div>
                <img className="w-full" src={item.image} alt="" />
              </div>
              <div>
                <p className="p-3 text-center font-medium">{item.homeType}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SaghfinooSwiper>
    </div>
  );
};

export default HomeCounseling;
