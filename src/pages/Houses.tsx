import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import Map from "../components/Houses/Map";
import Navbar from "../ui/Navbar";

const Houses: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <HousesHeader />
        <div className="flex gap-12">
          <FetchHouses />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Houses;
