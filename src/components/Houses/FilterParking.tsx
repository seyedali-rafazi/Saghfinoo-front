import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { ParkingDetails } from "../../data/FilterData";
import { activeType } from "../../types/indexType";

interface FilterParkingType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterParking: React.FC<FilterParkingType> = ({ active, setActive }) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeParking: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      parking: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="پارکینگ"
      active={active}
      items={ParkingDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterParking;
