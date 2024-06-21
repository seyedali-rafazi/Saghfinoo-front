import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { CollingSystemDetails } from "../../data/FilterData";

interface FilterCollingSystemType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterCollingSystem: React.FC<FilterCollingSystemType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeCollingSystem: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      collingSystem: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="سیستم سرمایشی"
      active={active}
      items={CollingSystemDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterCollingSystem;
