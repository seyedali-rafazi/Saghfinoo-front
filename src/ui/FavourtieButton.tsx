import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { favouriteHouse } from "../redux/feachers/favourtieProduct/favourtieProductAction";

interface FavHouseIdType {
  id: string;
  icon: React.ReactNode;
}

const FavourtieButton: React.FC<FavHouseIdType> = ({ id, icon }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(favouriteHouse({ id }));
  };

  return <button onClick={onClickFav}>{icon}</button>;
};

export default FavourtieButton;
