import { useEffect, useState } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { ParkingDetails } from "../../data/FilterData";

const FilterParking: React.FC = () => {
  const [active, setActive] = useState(1);
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive(e.id);
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
