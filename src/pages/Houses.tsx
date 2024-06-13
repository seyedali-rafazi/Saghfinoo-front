import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import Map from "../components/Houses/Map";
import Navbar from "../ui/Navbar";

const Houses: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-8 md:px-16 py-10 space-y-5">
        <HousesHeader />
        <div className="flex">
          <FetchHouses />
        </div>
      </div>
    </div>
  );
};

export default Houses;
