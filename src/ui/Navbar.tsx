import { Link } from "react-router-dom";
import { Logo, miniLogo } from "../icons/homeIcon";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed bg-white py-3 px-6 md:rounded-xl w-full md:w-11/12 mx-32 md:my-14 z-50 flex justify-between items-center">
        <div className="flex justify-between md:justify-center items-center">
          <RxHamburgerMenu className="md:hidden w-6 h-6" />
          <div className="hidden md:block">{Logo}</div>
          <div className="hidden md:flex gap-3 font-medium">
            <Link to={""}>اجاره</Link>
            <Link to={""}>خرید</Link>
            <Link to={""}>املاک و مستغلات</Link>
            <Link to={""}>مشاورین املاک</Link>
            <Link to={""}>اخبار روز</Link>
          </div>
        </div>
        <div className="md:hidden">{miniLogo}</div>
        <div className="flex gap-4 font-medium">
          <button className="hidden md:block hover:text-primary duration-300">
            ورود
          </button>
          <Link
            className="px-4 py-2 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white duration-300"
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
