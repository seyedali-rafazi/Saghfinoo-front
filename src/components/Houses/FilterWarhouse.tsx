import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { WarhouseDetails } from "../../data/FilterData";
import { activeType } from "../../types/indexType";

interface FilterWarhouseType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterWarhouse: React.FC<FilterWarhouseType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeWarhouse: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      parking: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="انباری"
      active={active}
      items={WarhouseDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterWarhouse;
