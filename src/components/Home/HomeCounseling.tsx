import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";

const Counseling = [
  {
    id: 1,
    image: "/photos/location.png",
    homeType: "خانه مسکونی",
  },
  {
    id: 2,
    image: "/photos/time.png",
    homeType: "آپارتمان و برج",
  },
  {
    id: 3,
    image: "/photos/people.png",
    homeType: "ویلا",
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
      <SaghfinooSwiper xl={4} lg={4}>
        {Counseling.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col bg-gray-100 gap-8 rounded-lg border border-gray-200">
              <div>
                <img src={item.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SaghfinooSwiper>
    </div>
  );
};

export default HomeCounseling;
