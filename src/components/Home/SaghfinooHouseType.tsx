import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import SwiperSlideSimple from "../../ui/SwiperSlideSimple";
import { SaghfinooHpouseDetails } from "../../data/HomeData";

const SaghfinooHouseType: React.FC = () => {
  return (
    <div className="my-10 space-y-8 text-gray-800 max-w-[1640px] mx-auto">
      <h2 className="font-bold text-xl xl:text-2xl mx-10 sm:mx-12 lg:mx-14">
        در سقفینو دنبال چه نوع ملکی هستید
      </h2>
      <div className="mx-10 sm:mx-12 md:mx-14">
        <SaghfinooSwiper xl={4} lg={3} md={2} sm={2}>
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
    </div>
  );
};

export default SaghfinooHouseType;
