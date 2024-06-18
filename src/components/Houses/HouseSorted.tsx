import { Select } from "@headlessui/react";
import { FaArrowDownShortWide } from "react-icons/fa6";

interface HouseSortedType {
  limit: number;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const HouseSorted: React.FC<HouseSortedType> = (limit, setSort) => {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  return (
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
  );
};

export default HouseSorted;
