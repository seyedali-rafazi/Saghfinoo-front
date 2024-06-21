import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { HeatingSystemDetails } from "../../data/FilterData";

interface FilterHeatingSystemType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterHeatingSystem: React.FC<FilterHeatingSystemType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeHeatingSystem: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      heatingSystem: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="سیستم گرمایشی"
      active={active}
      items={HeatingSystemDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterHeatingSystem;
