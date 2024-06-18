import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Favourite } from "../../icons/housesIcon";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";
import Skeleton from "../../ui/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchHouses } from "../../redux/feachers/products/houseActions";
import { resetHouseState } from "../../redux/feachers/products/houseSlice";
import HousesInformation from "./HousesInformation";

interface FetchHousesType {
  city: string;
}

const FetchHouses: React.FC<FetchHousesType> = ({ city }) => {
  const dispatch: AppDispatch = useDispatch();
  const { items, loading, limit } = useSelector(
    (state: RootState) => state.house
  );
  const [sort, setSort] = useState("earliest");

  const params = {
    location: "Tehran",
    year: "1999",
    houseGroup: city,
    sort: sort,
  };

  useEffect(() => {
    dispatch(resetHouseState()); // Reset state to clear previous data
    dispatch(fetchHouses(params));
  }, [dispatch, city, sort]);

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
      <HousesInformation limit={limit} setSort={setSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {items.map((house: any) => (
          <div className="space-y-5 border rounded-lg h-fit" key={house._id}>
            <Link to={house._id}>
              <div className="relative w-full h-32 bg-cover rounded-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  src={house.imageLink}
                  alt=""
                />
              </div>
            </Link>

            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-center text-gray-350 text-sm font-medium">
                <h4>{house.title}</h4>
                <button>
                  <Favourite />
                </button>
              </div>
              <p className="font-medium text-gray-500">شهر&nbsp;{house.city}</p>
              <p className="font-medium text-sm">
                قیمت&nbsp;{toPersianNumbersWithComma(house.price)}&nbsp;تومان
              </p>
              <Link
                to={house._id}
                className="text-white bg-primary w-full p-2 rounded-md flex justify-center font-medium"
              >
                مشخصات کامل
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-6 flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
        {loading && <Skeleton cards={2} />}
      </div>
    </div>
  );
};

export default FetchHouses;
