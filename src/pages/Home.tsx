import HomeCounseling from "../components/Home/HomeCounseling";
import HomeIntro from "../components/Home/HomeIntro";
import SaghfinooHouseType from "../components/Home/SaghfinooHouseType";
import SaghfinooSummery from "../components/Home/SaghfinooSummery";
import Navbar from "../ui/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen space-y-14">
        <HomeIntro />
        <SaghfinooSummery />
        <SaghfinooHouseType />
        <HomeCounseling />
      </div>
    </div>
  );
};

export default Home;
