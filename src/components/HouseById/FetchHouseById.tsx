import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHouseById } from "../../redux/feachers/productById/productByIdAction";
import Loading from "../../ui/Loader";
import FetchHouseInformation from "./FetchHouseInformation";
import HousePhoto from "./HousePhoto";
import FetchHouseSwiper from "./FetchHouseSwiper";
import HouseLocationMap from "./HouseLocationMap";

const FetchHouseById: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { loading, houseById, error } = useSelector(
    (state: RootState) => state.houseById
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchHouseById({ id }));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !houseById?.data?.product) {
    return (
      <p className="text-center font-bold text-gray-500 py-20">
        ملک مورد نظر یافت نشد
      </p>
    );
  }

  const fetchHouse = houseById.data.product;

  return (
    <div className="space-y-14">
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full h-full">
        <FetchHouseInformation fetchHouse={fetchHouse} />
        <HousePhoto fetchHouse={fetchHouse} />
      </div>
      <HouseLocationMap property={fetchHouse} />
      <FetchHouseSwiper />
    </div>
  );
};

export default FetchHouseById;
