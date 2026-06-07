import { News } from "../../data/HomeData";

const HomeNews: React.FC = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className="max-w-[1640px] mx-auto px-6 pb-16 space-y-8">
      <h2 className="font-bold text-xl lg:text-2xl text-gray-800">
        آخرین اخبار املاک را از سقفینو دنبال کنید
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {News.map((item, index) => (
          <article
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-4xl opacity-60">
                {index === 0
                  ? "📰"
                  : index === 1
                    ? "🏗️"
                    : index === 2
                      ? "📉"
                      : "🏖️"}
              </span>
            </div>
            <div className="p-4">
              <p className="font-medium text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                {item.news}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
>>>>>>> b0a58ad (initial refactor project)
  );
};

export default HomeNews;
