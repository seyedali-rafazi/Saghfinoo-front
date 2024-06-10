import HomeIntro from "../components/Home/HomeIntro";
import SaghfinooHouseType from "../components/Home/SaghfinooHouseType";
import SaghfinooSummery from "../components/Home/SaghfinooSummery";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen space-y-14">
      <HomeIntro />
      <SaghfinooSummery />
      <SaghfinooHouseType />
    </div>
  );
};

export default Home;
