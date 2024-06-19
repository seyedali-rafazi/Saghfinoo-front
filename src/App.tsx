import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import { QueryStringContext } from "./context/QueryStringContext";
import Map from "./components/Houses/SaghfinooMap";
import RentHouse from "./pages/RentHouse";
import BuyHouse from "./pages/BuyHouse";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <QueryStringContext>
      <UserContextProvider>
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent-house" element={<RentHouse />} />
          <Route path="/buy-house" element={<BuyHouse />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </UserContextProvider>
    </QueryStringContext>
  );
}

export default App;
