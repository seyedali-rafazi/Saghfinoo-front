import { Counseling } from "../../data/HomeData";

const HomeCounseling: React.FC = () => {
  return (
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
