import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { BathroomDetails } from "../../data/FilterData";
import { activeType } from "../../types/indexType";

interface FilterBathroomType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterBathroom: React.FC<FilterBathroomType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeBathroom: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      wc: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="سرویس بهداشتی"
      active={active}
      items={BathroomDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterBathroom;
