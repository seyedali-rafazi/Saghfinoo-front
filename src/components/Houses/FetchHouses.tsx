import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchHouses } from "../../redux/feachers/products/houseActions";
import { resetHouseState } from "../../redux/feachers/products/houseSlice";
import HousesInformation from "./HousesInformation";
import HouseCard from "../../ui/HouseCard";
import HouseSorted from "./HouseSorted";
import { useQueryContext } from "../../context/QueryStringContext";
import Filters from "./Filters";

interface FetchHousesType {
  city: string;
}

const FetchHouses: React.FC<FetchHousesType> = ({ city }) => {
  const dispatch: AppDispatch = useDispatch();
  
  const { items, loading, limit } = useSelector(
    (state: RootState) => state.house
  );
  const [sort, setSort] = useState("earliest");
  const { queryString } = useQueryContext();

  const params = {
    houseGroup: city,
    sort: sort,
    queryString,
  };

  useEffect(() => {
    dispatch(resetHouseState()); // Reset state to clear previous data
    dispatch(fetchHouses(params));
  }, [dispatch, city, sort, queryString]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    if (items.length < limit) {
      dispatch(fetchHouses(params));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, items.length, limit]);

  return (
    <div className="space-y-5 w-full md:w-1/2">
      <HousesInformation limit={limit}>
        <Filters />
        <HouseSorted setSort={setSort} />
      </HousesInformation>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {items.map((house: any) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
      <div className="flex gap-6 flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
        {loading && <Skeleton cards={2} />}
      </div>
    </div>
  );
};

export default FetchHouses;
