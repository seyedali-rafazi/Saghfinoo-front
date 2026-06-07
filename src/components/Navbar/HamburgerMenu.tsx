import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const HamburgerMenu: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenSidebar(true)}
        className="md:hidden p-1 cursor-pointer"
        aria-label="منو"
      >
        <RxHamburgerMenu className="w-6 h-6" />
      </button>
      <Sidebar onClose={() => setOpenSidebar(false)} open={openSidebar} />
    </>
  );
};

export default HamburgerMenu;
