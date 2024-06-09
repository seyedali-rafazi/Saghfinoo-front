import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
