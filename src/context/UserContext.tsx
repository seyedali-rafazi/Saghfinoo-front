import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchUser } from "../redux/feachers/user/userActions";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  userState: RootState["user"];
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ userState }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
