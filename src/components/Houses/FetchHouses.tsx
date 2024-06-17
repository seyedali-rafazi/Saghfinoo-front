import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Favourite } from "../../icons/housesIcon";
import { toPersianNumbersWithComma } from "../../utils/FrormatNumber";
import Skeleton from "../../ui/Skeleton";

interface Item {
  _id: number;
}

const FetchHouses: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/product/list?page=${page}`
      );
      const data = await response.json();
      setLimit(data.data.total);
      setItems((prevItems) => [...prevItems, ...data.data.products]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    if (items.length < limit) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="space-y-5 w-full md:w-1/2">
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
        {isLoading && <Skeleton cards={2} />}
      </div>
    </div>
  );
};

export default FetchHouses;
