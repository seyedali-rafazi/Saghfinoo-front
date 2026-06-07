import Footer from "../components/Footer/Footer";
import HomeCounseling from "../components/Home/HomeCounseling";
import HomeFeaturedListings from "../components/Home/HomeFeaturedListings";
import HomeIntro from "../components/Home/HomeIntro";
import HomeNews from "../components/Home/HomeNews";
import HomeStats from "../components/Home/HomeStats";
import SaghfinooHouseType from "../components/Home/SaghfinooHouseType";
import SaghfinooSummery from "../components/Home/SaghfinooSummery";
import Navbar from "../ui/Navbar";

const Home: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar />
      <div className="w-full min-h-screen space-y-16 py-4">
        <HomeIntro />
        <HomeStats />
        <SaghfinooSummery />
        <HomeFeaturedListings />
        <SaghfinooHouseType />
        <HomeCounseling />
        <HomeNews />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
