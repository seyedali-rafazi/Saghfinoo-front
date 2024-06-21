import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { BathroomTypeDetails } from "../../data/FilterData";

interface FilterBathroomTypeType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterBathroomType: React.FC<FilterBathroomTypeType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeBathroomType: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      WCType: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="نوع سرویس بهداشتی"
      active={active}
      items={BathroomTypeDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterBathroomType;
