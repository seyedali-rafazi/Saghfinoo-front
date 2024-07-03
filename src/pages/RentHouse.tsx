import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import SaghfinooMap from "../components/Houses/SaghfinooMap";
import Navbar from "../ui/Navbar";

const RentHouse: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <HousesHeader headerText="اجاره  خانه" />
        <div className="flex gap-12">
          <FetchHouses city="اجاره" />
          <div className="w-1/2">
            <SaghfinooMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentHouse;
