import HomeIntro from "../components/Home/HomeIntro";
import SaghfinooSummery from "../components/Home/SaghfinooSummery";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen space-y-14">
      <HomeIntro />
      <SaghfinooSummery />
    </div>
  );
};

export default Home;
