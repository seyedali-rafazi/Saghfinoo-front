import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { favouriteHouse } from "../redux/feachers/favourtieProduct/favourtieProductAction";
import { useEffect } from "react";
import { fetchUser } from "../redux/feachers/user/userActions";

interface FavHouseIdType {
  id: any;
  icon: any;
}

const FavourtieButton: React.FC<FavHouseIdType> = ({ id, icon }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const onCkickFav = (id: any) => {
    dispatch(
      favouriteHouse({
        id: id,
      })
    );
  };

  return <button onClick={() => onCkickFav(id)}>{icon}</button>;
};

export default FavourtieButton;
