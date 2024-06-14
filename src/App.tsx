import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import Houses from "./pages/Houses";
import Map from "./components/Houses/Map";

function App() {
  return (
    <UserContextProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
