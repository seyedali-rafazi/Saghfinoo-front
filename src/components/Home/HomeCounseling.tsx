import { Counseling } from "../../data/HomeData";

const HomeCounseling: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="mx-6 md:mx-14 my-10 space-y-8 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl xl:text-3xl">
          همه به شما مشاوره می‌دهند!
        </h2>
        <h4 className="font-medium text-lg lg:text-xl text-center">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </h4>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <SaghfinooSwiper xl={3} lg={3} >
          {Counseling.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex flex-col justify-center items-center rounded-lg border border-gray-200 max-w-56 min-h-52 p-5 shadow-lg">
                <img
                  role="presentation"
                  onError={(e) => {
                    e.currentTarget.src = "/photos/default.webp";
                  }}
                  className="w-full h-full object-cover rounded-t-lg"
                  src={item.image}
                  alt="HomeCounseling"
                />
                <div>
                  <p className="p-3 text-center font-medium text-base">
                    {item.homeType}
                  </p>
                </div>
=======
    <section className="bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="max-w-[1240px] mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="font-bold text-xl xl:text-3xl text-gray-800">
            همه به شما مشاوره می‌دهند!
          </h2>
          <p className="font-medium text-lg text-gray-500">
            اما در سقفینو مشاوران املاک کنار شما می‌مانند
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Counseling.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl">
                  {index === 0 ? "📍" : index === 1 ? "⚡" : "🤝"}
                </span>
>>>>>>> b0a58ad (initial refactor project)
              </div>
              <p className="font-medium text-base text-gray-700 leading-relaxed">
                {item.homeType}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCounseling;
