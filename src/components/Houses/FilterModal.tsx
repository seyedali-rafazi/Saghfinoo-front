import { useState } from "react";
import Modal from "../../ui/Modal";
import FilterParking from "./FilterParking";
import FilterRoom from "./FilterRoom";
import FilterWarhouse from "./FilterWarhouse";
import FilterBathroom from "./FilterBathroom";
import { activeType } from "../../types/indexType";
import FilterBathroomType from "./FilterBathroomType";
import FilterElevator from "./FilterElevator";
import FilterFloor from "./FilterFloor";
import FilterCollingSystem from "./FilterCollingSystem";
import FilterHeatingSystem from "./FilterHeatingSystem";
import FilterFloorMaterial from "./FilterFloorMaterial";

interface FilterModalType {
  setFilterOpen: (open: boolean) => void;
  filterOpen: boolean;
}

const FilterModal: React.FC<FilterModalType> = ({
  filterOpen,
  setFilterOpen,
}) => {
  const [active, setActive] = useState<activeType>({
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
  });

  return (
    <Modal
      logo="فیلترها"
      onClose={() => setFilterOpen(false)}
      open={filterOpen}
      width="h-full w-full md:w-2/3 lg:w-1/2 md:h-fit overflow-scroll "
    >
      <div className="space-y-7 bg-white w-full overflow-scroll md:max-h-[calc(100vw-40rem)]">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full">
          <FilterRoom active={active.activeRoom} setActive={setActive} />
          <FilterParking active={active.activeParking} setActive={setActive} />
          <FilterWarhouse
            active={active.activeWarhouse}
            setActive={setActive}
          />
          <FilterBathroom
            active={active.activeBathroom}
            setActive={setActive}
          />
          <FilterBathroomType
            active={active.activeBathroomType}
            setActive={setActive}
          />
          <FilterElevator
            active={active.activeFilterElevator}
            setActive={setActive}
          />
          <FilterFloor active={active.activeFloor} setActive={setActive} />
          <FilterCollingSystem
            active={active.activeCollingSystem}
            setActive={setActive}
          />
          <FilterHeatingSystem
            active={active.activeHeatingSystem}
            setActive={setActive}
          />
          <FilterFloorMaterial
            active={active.activeFloorMaterial}
            setActive={setActive}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
