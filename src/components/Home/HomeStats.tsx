import { getPropertyStats } from "../../services/propertyService";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";

const HomeStats: React.FC = () => {
  const stats = getPropertyStats();

  const items = [
    { label: "کل آگهی‌ها", value: stats.total, color: "bg-primary" },
    { label: "فروش", value: stats.buy, color: "bg-shade-200" },
    { label: "اجاره", value: stats.rent, color: "bg-tint-600" },
    { label: "آپارتمان", value: stats.apartment, color: "bg-gray-600" },
  ];

  return (
    <section className="max-w-[1640px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`w-12 h-12 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
            >
              <span className="text-white font-bold text-lg">
                {toPersianNumbersWithComma(item.value)}
              </span>
            </div>
            <p className="font-bold text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
