import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import Map from "./components/Houses/SaghfinooMap";
import RentHouse from "./pages/RentHouse";
import BuyHouse from "./pages/BuyHouse";

function App() {
  return (
    <UserContextProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent-house" element={<RentHouse />} />
        <Route path="/buy-house" element={<BuyHouse />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
