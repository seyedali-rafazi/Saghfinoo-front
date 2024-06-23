import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";

interface SearchFilterType {
  onClose: () => void;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const SearchFilter: React.FC<SearchFilterType> = ({ onClose, setActive }) => {
  const { setQueryString } = useQueryContext();

  const hadelClick = () => {
    setActive((prevUser) => ({
      ...prevUser,
      activeRoom: 1,
      activeWarhouse: 1,
      activeParking: 1,
      activeBathroom: 1,
      activeBathroomType: 1,
      activeFilterElevator: 1,
      activeFloor: 1,
      activeCollingSystem: 1,
      activeHeatingSystem: 1,
      activeFloorMaterial: 1,
    }));
    setQueryString((prevUser) => ({
      ...prevUser,
      activeRoom: 1,
      activeWarhouse: 1,
      activeParking: 1,
      activeBathroom: 1,
      activeBathroomType: 1,
      activeFilterElevator: 1,
      activeFloor: 1,
      activeCollingSystem: 1,
      activeHeatingSystem: 1,
      activeFloorMaterial: 1,
    }));
  };
  
  return (
    <div className="flex justify-evenly w-full my-10 gap-3">
      <button
        onClick={hadelClick}
        className="text-primary w-40 py-2.5 font-medium rounded-md border border-primary flex justify-center"
      >
        حذف فیلترها
      </button>
      <button
        className="text-white bg-primary w-40 py-2.5 font-medium rounded-md flex justify-center"
        onClick={onClose}
      >
        جست و جو
      </button>
    </div>
  );
};

export default SearchFilter;
