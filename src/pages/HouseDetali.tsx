import FetchHouseById from "../components/HouseById/FetchHouseById";
import Navbar from "../ui/Navbar";

const HouseDetali: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen space-y-14">
        <FetchHouseById />
      </div>
    </div>
  );
};

export default HouseDetali;
