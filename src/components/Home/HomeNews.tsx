import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import SwiperSlideSimple from "../../ui/SwiperSlideSimple";
import { News } from "../../data/HomeData";

const HomeNews: React.FC = () => {
  return (
    <div className="my-10 space-y-8 text-gray-800 max-w-[1640px] mx-auto">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-xl md:text-xl lg:text-2xl mx-10 sm:mx-12 md:mx-14">
          آخرین اخبار املاک را از سقفینو دنبال کنید
        </h2>
      </div>
      <div className="mx-10 sm:mx-12 md:mx-14">
        <SaghfinooSwiper xl={4} lg={4} md={3} sm={2}>
          {News.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <SwiperSlideSimple
                id={item.id}
                image={item.image}
                text={item.news}
              />
            </SwiperSlide>
          ))}
        </SaghfinooSwiper>
      </div>
    </div>
  );
};

export default HomeNews;
