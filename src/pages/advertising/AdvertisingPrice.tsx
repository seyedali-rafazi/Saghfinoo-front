import AdFirst from "../../components/AdFirst/AdFirst";
import { useAdQueryContext } from "../../context/AdQueryContext";

const AdvertisingPrice: React.FC = () => {
  const { adQueryString, setAdQueryString } = useAdQueryContext();
  console.log(adQueryString);

  return (
    <div className="w-screen min-h-screen bg-slate-200 px-24 py-24">
      <div className="w-full h-full bg-white rounded-2xl flex">
        <div className="h-full w-1/3 relative">
          <img
            className="absolute w-full h-full rounded-t-lg "
            src="/photos/advertising-background.png"
            alt=""
          />
        </div>
        <div className="h-full w-2/3 "></div>
      </div>
    </div>
  );
};

export default AdvertisingPrice;
