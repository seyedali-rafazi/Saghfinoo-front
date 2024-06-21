import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { FilterElevatorDetails } from "../../data/FilterData";

interface FilterElevatorType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterElevator: React.FC<FilterElevatorType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeFilterElevator: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      elevator: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="اسانسور"
      active={active}
      items={FilterElevatorDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterElevator;
