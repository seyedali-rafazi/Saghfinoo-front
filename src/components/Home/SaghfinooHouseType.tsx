import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import SwiperSlideSimple from "../../ui/SwiperSlideSimple";

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
            <SwiperSlideSimple
              id={item.id}
              image={item.image}
              header={item.houseNumber}
              text={item.homeType}
            />
          </SwiperSlide>
        ))}
      </SaghfinooSwiper>
    </div>
  );
};

export default SaghfinooHouseType;
