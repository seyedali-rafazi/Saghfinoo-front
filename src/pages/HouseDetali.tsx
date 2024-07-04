import FetchHouseById from "../components/HouseById/FetchHouseById";
import Navbar from "../ui/Navbar";

const HouseDetali: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <FetchHouseById />
      </div>
    </div>
  );
};

export default HouseDetali;
