import { Link } from "react-router-dom";
import { Logo, miniLogo } from "../icons/homeIcon";
import EnterUser from "../components/Navbar/EnterUser";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center navbar-z max-w-[1200px] mx-auto">
      <div className="absolute bg-white shadow-lg border py-3 px-6 md:rounded-xl w-full md:w-11/12 max-w-[1700px] mx-32 md:my-14 z-50 flex justify-between items-center">
        <div className="flex justify-between md:justify-center items-center">
          <HamburgerMenu />
          <div className="hidden md:block">{Logo}</div>
          <div className="hidden md:flex gap-3 font-medium">
            <Link to={"/rent-house"}>اجاره</Link>
            <Link to={"/buy-house"}>خرید</Link>
            <Link to={""}>املاک و مستغلات</Link>
            <Link to={""}>مشاورین املاک</Link>
          </div>
        </div>
        <div className="md:hidden">{miniLogo}</div>
        <div className="flex md:gap-4 font-medium items-center">
          <EnterUser classHid="hidden">
            <p>ورود</p>
          </EnterUser>
          <Link
            className="px-4 py-2 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white duration-300 text-sm md:text-md"
            to=""
          >
            ثبت آگهی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
