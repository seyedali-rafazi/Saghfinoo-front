import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import Signup from "./feachers/authentication/signup";
import Houses from "./pages/Houses";

function App() {
  return (
    <UserContextProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
