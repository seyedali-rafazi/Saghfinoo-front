import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHouseById } from "../../redux/feachers/productById/productByIdAction";
import Loading from "../../ui/Loader";
import FetchHouseInformation from "./FetchHouseInformation";

const FetchHouseById: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { loading, houseById } = useSelector(
    (state: RootState) => state.houseById
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchHouseById({ id }));
    }
  }, [dispatch, id]);


  return (
    <div className="space-y-5 w-full h-full">
      {loading ? <Loading /> : <FetchHouseInformation houseById={houseById} />}
    </div>
  );
};

export default FetchHouseById;
