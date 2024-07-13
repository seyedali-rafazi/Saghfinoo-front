import { createContext, useContext, useMemo, useState } from "react";

type AdQueryStringContextProviderProps = {
  children: React.ReactNode;
};

interface AdQueryStringType {
  title?: string;
}

interface AdQueryContextType {
  adQueryString: AdQueryStringType;
  setAdQueryString: React.Dispatch<React.SetStateAction<AdQueryStringType>>;
}

const defaultValue: AdQueryContextType = {
  adQueryString: {
    title: "",
  },
  setAdQueryString: () => {},
};

const AdContext = createContext<AdQueryContextType>(defaultValue);

export const AdQueryStringContext: React.FC<
  AdQueryStringContextProviderProps
> = ({ children }) => {
  const [adQueryString, setAdQueryString] = useState<AdQueryStringType>({
    title: "",
  });

  const value = useMemo(
    () => ({ adQueryString, setAdQueryString }),
    [adQueryString, setAdQueryString]
  );

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
};

export function useAdQueryContext() {
  const context = useContext(AdContext);
  if (context === undefined)
    throw new Error("useQueryContext was used outside of its Provider");
  return context;
}
