import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import { activeType } from "../../types/indexType";
import FilterOptions from "./FilterOptions";
import { FloorMaterialDetails } from "../../data/FilterData";

interface FilterFloorMaterialType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterFloorMaterial: React.FC<FilterFloorMaterialType> = ({
  active,
  setActive,
}) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeFloorMaterial: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      floorMaterial: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="جنس کف"
      active={active}
      items={FloorMaterialDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterFloorMaterial;
