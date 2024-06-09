import { CiSearch } from "react-icons/ci";

const HomeSearchBox: React.FC = () => {
  return (
    <div className="p-3 bg-white border rounded-lg space-y-5 w-[540px]">
      <div className="flex justify-evenly text-xl border-b-2 border-b-gray-300 py-1">
        <button className="w-full h-full">اجاره</button>
        <button className="w-full h-full">خرید</button>
      </div>
      <div className="flex items-center">
        <button>
          <CiSearch className="w-8 h-8" />
        </button>
        <input
          className="w-72"
          type="text"
          placeholder="شهر مورد نظر را جست و جو کنید"
        />
      </div>
    </div>
  );
};

export default HomeSearchBox;
