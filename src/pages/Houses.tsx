import FetchHouses from "../components/Houses/FetchHouses";
import HousesHeader from "../components/Houses/HousesHeader";
import Navbar from "../ui/Navbar";

const Houses: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-[170px] px-16 py-10">
        <HousesHeader />
        <FetchHouses />
      </div>
    </div>
  );
};

export default Houses;
