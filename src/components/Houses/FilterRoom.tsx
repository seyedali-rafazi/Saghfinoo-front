import { useEffect, useState } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { RoomDetails } from "../../data/FilterData";

const FilterRoom: React.FC = () => {
  const [active, setActive] = useState(1);
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive(e.id);
    setQueryString((prevUser) => ({
      ...prevUser,
      rooms: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="اتاق خواب"
      active={active}
      items={RoomDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterRoom;
