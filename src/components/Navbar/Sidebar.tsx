import { useEffect, useRef } from "react";
import {
  Cross,
  UserAuth,
  Plus,
  Home,
  Key,
  LeftArrow,
} from "../../icons/SidebarIcon";
import { Link } from "react-router-dom";
import EnterUser from "./EnterUser";

const SidebarOptions = [
  {
    id: 1,
    text: "صفحه اصلی",
    icon: <Home />,
    path: "/",
  },
  {
    id: 2,
    text: "ثبت آگهی",
    icon: <Key />,
    path: "/ad-region",
  },
  {
    id: 3,
    text: "اجاره خانه",
    icon: <Plus />,
    path: "/rent-house",
  },
  {
    id: 4,
    text: "خرید خانه",
    icon: <Home />,
    path: "/buy-house",
  },
];

interface SidebarType {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarType> = ({ open, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      sidebarRef.current?.classList.remove("translate-x-full");
    } else {
      document.body.classList.remove("overflow-hidden");
      sidebarRef.current?.classList.add("translate-x-full");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100000000] lg:hidden">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-white shadow-xl transition-transform duration-300 z-[100000001]"
      >
        <div className="flex justify-end w-full p-6">
          <button type="button" onClick={onClose} aria-label="بستن منو">
            <Cross />
          </button>
        </div>
        <div className="flex gap-3 items-center py-6 px-4 bg-gray-100">
          <EnterUser>
            <div className="flex gap-2 items-center justify-center text-sm font-medium">
              <UserAuth />
              <p>ورود / ثبت نام</p>
            </div>
          </EnterUser>
        </div>
        <nav>
          {SidebarOptions.map((option) => (
            <Link
              className="flex justify-between items-center py-4 px-4 text-sm font-medium border-b border-gray-100 hover:bg-gray-50"
              key={option.id}
              to={option.path}
              onClick={onClose}
            >
              <div className="flex items-center gap-3">
                {option.icon}
                <p>{option.text}</p>
              </div>
              <LeftArrow />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
