import { Warn } from "../../icons/FetchHouseIcon";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";

interface FechHousePriceType {
  city?: string;
  price: number;
}

const FechHousePrice: React.FC<FechHousePriceType> = ({ city, price }) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center p-3 border border-gray-250 rounded-xl">
        <p className="font-bold text-xl">قیمت</p>
        <p className="font-medium">
          {price ? toPersianNumbersWithComma(price) : "۰"} تومان
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold">آگهی شده در {city}</p>
          <div className="flex justify-center items-center gap-2">
            <Warn />
            <p className="font-medium text-sm">گزارش تخلف آگهی</p>
          </div>
        </div>
        <p className="font-medium text-sm">شناسه آگهی ۲۳۲۴</p>
      </div>
    </div>
  );
};

export default FechHousePrice;
