import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import SaghfinooMap from "../components/Houses/SaghfinooMap";
import Navbar from "../ui/Navbar";

const BuyHouse: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <HousesHeader headerText="خرید خانه" />
        <div className="flex gap-12">
          <FetchHouses city="خرید" />
          <SaghfinooMap />
        </div>
      </div>
    </div>
  );
};

export default BuyHouse;
