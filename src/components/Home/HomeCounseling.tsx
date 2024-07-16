import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import { Counseling } from "../../data/HomeData";

const HomeCounseling: React.FC = () => {
  return (
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          همه به شما مشاوره می‌دهند!{" "}
        </h2>
        <h4 className="font-medium text-xl lg:text-2xl">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </h4>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <SaghfinooSwiper xl={3} lg={3}>
          {Counseling.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex flex-col justify-center items-center rounded-lg border border-gray-200 max-w-56 min-h-52 p-5 shadow-lg">
                <div className="w-[200px]">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="p-3 text-center font-medium text-xl">
                    {item.homeType}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SaghfinooSwiper>
      </div>
    </div>
  );
};

export default HomeCounseling;
