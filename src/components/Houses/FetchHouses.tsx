import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchHouses } from "../../redux/feachers/products/houseActions";

const FetchHouses: React.FC = () => {
  const houseState = useSelector((state: RootState) => state.house);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  console.log(houseState);

  return (
    <div>
      <h1 className="text-xl font-bold">املاک اجاره ای</h1>
    </div>
  );
};

export default FetchHouses;
