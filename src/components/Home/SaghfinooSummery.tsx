import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import { Link } from "react-router-dom";

const SaghfinooDetails = [
  {
    id: 1,
    image: "/photos/rent-home.png",
    header: "به آسانی یک خانه اجاره کنید",
    text: "در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.",
    buttonText: "اجاره خانه",
    path: "",
  },
  {
    id: 2,
    image: "/photos/buy-home.png",
    header: "خانه مورد علاقه‌تان را بخرید",
    text: "بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد. ما علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.",
    buttonText: "خرید خانه",
    path: "",
  },
  {
    id: 3,
    image: "/photos/order.png",
    header: "مالک هستید؟",
    text: "آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.",
    buttonText: "ثبت آگهی",
    path: "",
  },
];

const SaghfinooSummery: React.FC = () => {
  return (
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <h2 className="font-bold text-2xl">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </h2>
      <SaghfinooSwiper>
        {SaghfinooDetails.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col bg-gray-100 gap-8 rounded-lg border border-gray-200">
              <div className="flex flex-col gap-6">
                <div>
                  <img className="rounded-lg" src={item.image} alt="" />
                </div>
                <div className="p-5">
                  <h4 className="text-center font-black text-lg">
                    {item.header}
                  </h4>
                  <p className="text-center text-sm">{item.text}</p>
                </div>
              </div>
              <div className="flex justify-center p-6">
                <Link
                  className="w-full text-center bg-primary p-2 text-white font-bold rounded-lg"
                  to={item.path}
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SaghfinooSwiper>
    </div>
  );
};

export default SaghfinooSummery;
