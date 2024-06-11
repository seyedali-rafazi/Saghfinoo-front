import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import Signup from "./feachers/authentication/signup";

function App() {
  return (
    <UserContextProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
