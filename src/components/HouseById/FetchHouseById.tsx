import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHouseById } from "../../redux/feachers/productById/productByIdAction";
import Loading from "../../ui/Loader";

const FetchHouseById: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { error, houseById, loading } = useSelector(
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


  return <div className="space-y-5 w-full md:w-1/2"></div>;
};

export default FetchHouseById;
