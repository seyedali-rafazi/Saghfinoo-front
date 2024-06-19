import Modal from "../../ui/Modal";
import FilterParking from "./FilterParking";
import FilterRoom from "./FilterRoom";

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
      width="h-full w-full md:w-2/3 lg:w-1/2 md:h-fit md:rounded-lg"
    >
      <div className="space-y-7 bg-white flex justify-center w-full">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full">
          <FilterRoom />
          <FilterParking />
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
