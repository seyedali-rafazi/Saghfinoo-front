import { Link } from "react-router-dom";
import { SaghfinooDetails } from "../../data/HomeData";

const SaghfinooSummery: React.FC = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-6 space-y-8">
      <h2 className="font-bold text-xl xl:text-2xl text-gray-800">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SaghfinooDetails.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-gradient-to-br from-tint-100 to-tint-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">
                  {item.id === 1 ? "🏠" : item.id === 2 ? "🔑" : "📋"}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6 gap-4">
              <h4 className="font-black text-lg text-gray-800">{item.header}</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed flex-1">
                {item.text}
              </p>
              <Link
                className="w-full text-center bg-primary group-hover:bg-shade-100 p-3 text-white font-bold rounded-lg transition-colors"
                to={item.path}
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaghfinooSummery;
