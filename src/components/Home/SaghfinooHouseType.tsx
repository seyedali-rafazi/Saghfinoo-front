import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import { Link } from "react-router-dom";

const SaghfinooHpouseDetails = [
  {
    id: 1,
    image: "/photos/home-house.png",
    houseNumber: 28900,
    homeType: "خانه مسکونی",
  },
  {
    id: 2,
    image: "/photos/home-apartment.png",
    houseNumber: 309789,
    homeType: "آپارتمان و برج",
  },
  {
    id: 3,
    image: "/photos/home-villa.png",
    houseNumber: 946,
    homeType: "ویلا",
  },
  {
    id: 4,
    image: "/photos/home-buisiness.png",
    houseNumber: 47339,
    homeType: "تجاری و اداری",
  },
];

const SaghfinooHouseType: React.FC = () => {
  return (
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <h2 className="font-bold text-2xl">در سقفینو دنبال چه نوع ملکی هستید </h2>
      <SaghfinooSwiper xl={4} lg={4}>
        {SaghfinooHpouseDetails.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col bg-gray-100 rounded-lg border border-gray-200">
              <div>
                <img className="rounded-t-lg" src={item.image} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center w-full py-5">
                <p className="font-bold">{item.houseNumber}</p>
                <p>{item.homeType}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SaghfinooSwiper>
    </div>
  );
};

export default SaghfinooHouseType;
