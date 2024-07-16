import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useQueryContext } from "../../context/QueryStringContext";

const HomeSearchBox: React.FC = () => {
  const [city, setCity] = useState("rent");
  const [cityName, setCityName] = useState("");
  const { setQueryString } = useQueryContext();
  const navigate = useNavigate();

  const handelSubmit = () => {
    setQueryString((prevUser) => ({
      ...prevUser,
      city: cityName,
    }));
    if (city == "rent") navigate("/rent-house");
    if (city == "buy") navigate("/buy-house");
  };
  return (
    <div className="p-3 bg-white border rounded-lg space-y-5 w-1/2 min-w-80 max-w-xl">
      <div className="flex justify-evenly text-xl border-b-2 border-b-gray-300 py-1">
        <button
          value="rent"
          onClick={() => setCity("rent")}
          className={`${
            city == "rent" ? "text-red-400 duration-300" : ""
          } w-full h-full font-bold`}
        >
          اجاره
        </button>
        <button
          value="buy"
          onClick={() => setCity("buy")}
          className={`${
            city == "buy" ? "text-red-400 duration-300" : ""
          } w-full h-full font-bold`}
        >
          خرید
        </button>
      </div>
      <form className="flex items-center" onSubmit={handelSubmit}>
        <button type="submit">
          <CiSearch className="w-8 h-8" />
        </button>
        <input
          className="w-full font-semibold"
          type="text"
          onChange={(e) => setCityName(e.target.value)}
          placeholder="شهر مورد نظر را جست و جو کنید"
        />
      </form>
    </div>
  );
};

export default HomeSearchBox;
