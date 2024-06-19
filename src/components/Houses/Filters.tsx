import { useState } from "react";
import { TbFilterSearch } from "react-icons/tb";
import FilterModal from "./FilterModal";

const Filters: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <button
          onClick={() => setFilterOpen(true)}
          className="bg-gray-150 appearance-none w-full h-full pl-2 pr-8 p py-1 border border-gray-300 rounded-md shadow-sm"
        >
          فیلترها
        </button>
        <TbFilterSearch className="absolute top-2.5 right-2" />
      </div>
      <FilterModal filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
    </div>
  );
};

export default Filters;
