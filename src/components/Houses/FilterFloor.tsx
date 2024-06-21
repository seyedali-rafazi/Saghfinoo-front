import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { FloorDetails } from "../../data/FilterData";

interface FilterFloorType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterFloor: React.FC<FilterFloorType> = ({ active, setActive }) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeFloor: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      floor: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="طبقه"
      active={active}
      items={FloorDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterFloor;
