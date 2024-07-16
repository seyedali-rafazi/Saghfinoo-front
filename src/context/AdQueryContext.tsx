import { createContext, useContext, useMemo, useState } from "react";

type AdQueryStringContextProviderProps = {
  children: React.ReactNode;
};

export interface AdQueryStringType {
  title: string;
  description: string;
  houseGroup: string;
  offPrice: number;
  price: number;
  rooms: number;
  floor: number;
  parking: number;
  WC: number;
  WCType: string;
  warHouse: number;
  elevator: number;
  collingSystem: string;
  floorMaterial: string;
  imageLink: string;
  slug: string;
  discount: number;
  heatingSystem: string;
  city: string;
}

interface AdQueryContextType {
  adQueryString: AdQueryStringType;
  setAdQueryString: React.Dispatch<React.SetStateAction<AdQueryStringType>>;
}

const defaultValue: AdQueryContextType = {
  adQueryString: {
    title: "",
    description: "",
    houseGroup: "",
    offPrice: 0,
    price: 0,
    rooms: 0,
    floor: 0,
    parking: 0,
    WC: 0,
    WCType: "",
    warHouse: 0,
    elevator: 0,
    collingSystem: "",
    floorMaterial: "",
    imageLink: "https://s30.picofile.com/file/8476525826/8_min.jpg",
    slug: "villa-b44c81e5-3d02-4e35-857f-982a3de625sfdfsdj",
    discount: 0,
    heatingSystem: "",
    city: "",
  },
  setAdQueryString: () => {},
};

const AdContext = createContext<AdQueryContextType>(defaultValue);

export const AdQueryStringContext: React.FC<
  AdQueryStringContextProviderProps
> = ({ children }) => {
  const [adQueryString, setAdQueryString] = useState<AdQueryStringType>({
    title: "",
    description: "",
    houseGroup: "",
    offPrice: 0,
    price: 0,
    rooms: 0,
    floor: 0,
    parking: 0,
    WC: 0,
    WCType: "",
    warHouse: 0,
    elevator: 0,
    collingSystem: "",
    floorMaterial: "",
    imageLink: "https://s30.picofile.com/file/8476525826/8_min.jpg",
    slug: "villa-b44c81e5-3d02-4e35-857f-982a3de625sfdfsdj",
    discount: 0,
    heatingSystem: "",
    city: "",
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
