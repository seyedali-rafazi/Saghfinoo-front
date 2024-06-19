import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";

const TestingFetch: React.FC = () => {
  const { queryString, setQueryString } = useQueryContext();

  const handelChehge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryString((prevUser) => ({ ...prevUser, rooms: e.target.value }));
  };

  useEffect(() => {
    console.log(queryString);
  }, [queryString]);

  return (
    <div>
      <select onChange={handelChehge}>
        <option value="1">یک اتاق</option>
        <option value="2">دو اتاق</option>
      </select>
    </div>
  );
};

export default TestingFetch;
