import { useState } from "react";
import { Link } from "react-router-dom";
import { listProperties } from "../../services/propertyService";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";
import { Property } from "../../types/property";

const HomeFeaturedListings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"خرید" | "اجاره">("خرید");

  const { products } = listProperties({
    houseGroup: activeTab,
    sort: "earliest",
    page: 1,
    pageSize: 4,
  });

  return (
    <section className="max-w-[1640px] mx-auto px-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-bold text-xl md:text-2xl text-gray-800">
            جدیدترین آگهی‌های سقفینو
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            ملک‌های منتخب برای {activeTab === "خرید" ? "خرید" : "اجاره"} در
            تهران
          </p>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("خرید")}
            className={`px-6 py-2 rounded-md font-bold transition-colors ${
              activeTab === "خرید"
                ? "bg-primary text-white shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            خرید
          </button>
          <button
            onClick={() => setActiveTab("اجاره")}
            className={`px-6 py-2 rounded-md font-bold transition-colors ${
              activeTab === "اجاره"
                ? "bg-primary text-white shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            اجاره
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((property: Property) => (
          <Link
            key={property._id}
            to={`/house-details/${property._id}`}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={property.imageLink}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {property.houseGroup.title}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-gray-800 text-sm line-clamp-1">
                {property.title}
              </h3>
              <p className="text-gray-500 text-xs">{property.city}</p>
              <div className="flex justify-between items-center pt-2">
                <p className="text-primary font-bold text-sm">
                  {toPersianNumbersWithComma(property.price)} تومان
                </p>
                <span className="text-xs text-gray-400">
                  {property.rooms} اتاق
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to={activeTab === "خرید" ? "/buy-house" : "/rent-house"}
          className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-shade-100 transition-colors"
        >
          مشاهده همه آگهی‌های {activeTab}
        </Link>
      </div>
    </section>
  );
};

export default HomeFeaturedListings;
