import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchHouses } from "../../redux/feachers/products/houseActions";
import { Link } from "react-router-dom";
import { Favourite } from "../../icons/housesIcon";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";

const FetchHouses: React.FC = () => {
  const houseState = useSelector((state: RootState) => state.house);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  console.log(houseState?.house?.data?.products[1]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {houseState?.house?.data?.products.map((house: any) => (
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
  );
};

export default FetchHouses;
