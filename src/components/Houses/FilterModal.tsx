import Modal from "../../ui/Modal";
import RoomFilter from "./RoomFilter";

interface FilterModalType {
  setFilterOpen: (open: boolean) => void;
  filterOpen: boolean;
}

const FilterModal: React.FC<FilterModalType> = ({
  filterOpen,
  setFilterOpen,
}) => {
  return (
    <Modal
      logo="فیلترها"
      onClose={() => setFilterOpen(false)}
      open={filterOpen}
      width="w-1/2"
    >
      <div className="space-y-7 bg-white flex justify-center w-full">
        <div className="flex flex-col justify-center items-center font-normal text-sm w-full">
          <RoomFilter />
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
