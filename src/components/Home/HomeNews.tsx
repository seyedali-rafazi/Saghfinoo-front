import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import SwiperSlideSimple from "../../ui/SwiperSlideSimple";

const News = [
  {
    id: 1,
    image: "/photos/bazar-maskan.png",
    news: "رکود بازار مسکن؛ فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان",
  },
  {
    id: 2,
    image: "/photos/zelzele.png",
    news: "خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های",
  },
  {
    id: 3,
    image: "/photos/bazar-kesad.png",
    news: "بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی",
  },
  {
    id: 4,
    image: "/photos/shahrak-saheli.png",
    news: "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد بازار مزایده شده است.",
  },
];

const HomeNews: React.FC = () => {
  return (
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-2xl">
          آخرین اخبار املاک را از سقفینو دنبال کنید
        </h2>
      </div>
      <SaghfinooSwiper xl={4} lg={4}>
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
  );
};

export default HomeNews;
