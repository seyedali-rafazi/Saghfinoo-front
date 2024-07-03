import { Link } from "react-router-dom";
import { toPersianNumbersWithComma } from "../utils/FrormatNumber";
import FavourtieButton from "./FavourtieButton";
import { useUserContext } from "../context/UserContext";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { PiBookmarkSimpleLight } from "react-icons/pi";

interface HouseCard {
  house: {
    _id: any;
    imageLink?: string;
    title?: string;
    city?: string;
    price: number;
  };
}

const HouseCard: React.FC<HouseCard> = ({ house }) => {
  const { userState } = useUserContext();

  const userFav = userState?.user?.data.user?.favoriteProduct;

  return (
    <div className="space-y-5 border rounded-lg h-fit" key={house._id}>
      <Link to={`/house-details/${house._id}`}>
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
          {userFav &&
          userFav.map((FavItems: any) => FavItems._id).includes(house._id) ? (
            <FavourtieButton
              id={house._id}
              icon={<PiBookmarkSimpleFill className="w-7 h-7 text-gray-800" />}
            />
          ) : (
            <FavourtieButton
              id={house._id}
              icon={<PiBookmarkSimpleLight className="w-7 h-7 text-gray-800" />}
            />
          )}
        </div>
        <p className="font-medium text-gray-500">شهر&nbsp;{house.city}</p>
        <p className="font-medium text-sm">
          قیمت&nbsp;{toPersianNumbersWithComma(house.price)}&nbsp;تومان
        </p>
        <Link
          to={`/house-details/${house._id}`}
          className="text-white bg-primary w-full p-2 rounded-md flex justify-center font-medium"
        >
          مشخصات کامل
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
