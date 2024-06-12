import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import AuthModal from "./AuthModal";
import { FaRegCircleUser } from "react-icons/fa6";

const EnterUser: React.FC = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const { userState } = useUserContext();
  const handelClick = () => {
    setOpenAuth(true);
  };
  const user = userState?.user?.data.user;

  return (
    <div>
      {userState.user == null ? (
        <button
          onClick={handelClick}
          className="hidden md:block hover:text-primary duration-300"
        >
          ورود
        </button>
      ) : (
        <button className="hidden md:flex  gap-2 text-gray-500 items-center">
          <FaRegCircleUser className="w-6 h-6 " />
          {user.name ? user.name : "کاربر سقفینو"}
        </button>
      )}
      <AuthModal
        setOpenAuth={setOpenAuth}
        openAuth={openAuth}
        user={user}
        loading={userState.loading}
      />
    </div>
  );
};

export default EnterUser;
