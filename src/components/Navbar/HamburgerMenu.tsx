import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const HamburgerMenu: React.FC = ({}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <RxHamburgerMenu
        onClick={() => setOpenSidebar(true)}
        className="md:hidden w-6 h-6"
      />
      <Sidebar onClose={() => setOpenSidebar(false)} open={openSidebar} />
    </>
  );
};

export default HamburgerMenu;
