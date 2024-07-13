import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import { QueryStringContext } from "./context/QueryStringContext";
import { AdQueryStringContext } from "./context/AdQueryContext";
import Map from "./components/Houses/SaghfinooMap";
import RentHouse from "./pages/RentHouse";
import BuyHouse from "./pages/BuyHouse";
import ScrollToTop from "./ui/ScrollToTop";
import HouseDetali from "./pages/HouseDetali";
import AdvertisingRegion from "./pages/advertising/AdvertisingRegion";
import AdvertisingPrice from "./pages/advertising/AdvertisingPrice";

function App() {
  return (
    <AdQueryStringContext>
      <QueryStringContext>
        <UserContextProvider>
          <Toaster />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent-house" element={<RentHouse />} />
            <Route path="/buy-house" element={<BuyHouse />} />
            <Route path="/map" element={<Map />} />
            <Route path="/house-details/:id" element={<HouseDetali />} />
            <Route path="/ad-region" element={<AdvertisingRegion />} />
            <Route path="/ad-price" element={<AdvertisingPrice />} />
          </Routes>
        </UserContextProvider>
      </QueryStringContext>
    </AdQueryStringContext>
  );
}

export default App;
