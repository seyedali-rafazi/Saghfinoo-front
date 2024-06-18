import { Select } from "@headlessui/react";
import { FaArrowDownShortWide } from "react-icons/fa6";

interface HousesInformationTypr {
  limit: number;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const HousesInformation: React.FC<HousesInformationTypr> = ({
  limit,
  setSort,
}) => {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  return (
    <div className="flex justify-between items-center">
      <h6 className="font-medium text-tint-700">{limit}&nbsp;مورد یافت شد</h6>
      <div className="relative">
        <Select
          onChange={handelChange}
          className="bg-gray-150 appearance-none w-full h-full pl-8 pr-2 p py-1 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="earliest">جدیدترین</option>
          <option value="latest">قدیمی‌ترین</option>
        </Select>
        <FaArrowDownShortWide className="absolute top-2.5 left-2" />
      </div>
    </div>
  );
};

export default HousesInformation;
