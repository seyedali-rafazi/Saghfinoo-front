import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import AuthModal from "./AuthModal";
import { UserAuth } from "../../icons/SidebarIcon";

interface EnterUserType {
  classHid?: string;
  children: React.ReactNode;
}

const EnterUser: React.FC<EnterUserType> = ({ classHid, children }) => {
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
          className={`md:block hover:text-primary duration-300 ${classHid}`}
        >
          {children}
        </button>
      ) : (
        <button className={`flex gap-2 text-gray-500 items-center ${classHid}`}>
          <UserAuth />
          {user.name ? (
            <p className="font-medium">{user.name}</p>
          ) : (
            "کاربر سقفینو"
          )}
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
