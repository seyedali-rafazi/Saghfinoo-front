import { Link } from "react-router-dom";
import { getPropertyStats } from "../../services/propertyService";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";

const SaghfinooHouseType: React.FC = () => {
  const stats = getPropertyStats();

  const types = [
    {
      id: 1,
      icon: "🏡",
      count: stats.house + stats.apartment,
      label: "آپارتمان و خانه",
      path: "/buy-house",
    },
    {
      id: 2,
      icon: "🏰",
      count: stats.villa,
      label: "ویلا",
      path: "/buy-house",
    },
    {
      id: 3,
      icon: "🔑",
      count: stats.rent,
      label: "اجاره",
      path: "/rent-house",
    },
    {
      id: 4,
      icon: "💰",
      count: stats.buy,
      label: "فروش",
      path: "/buy-house",
    },
  ];

  return (
    <section className="max-w-[1640px] mx-auto px-6 space-y-8">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-800">
        در سقفینو دنبال چه نوع ملکی هستید؟
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {types.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <p className="font-black text-2xl text-primary mb-1">
              {toPersianNumbersWithComma(item.count)}
            </p>
            <p className="font-medium text-gray-600 text-sm">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SaghfinooHouseType;
