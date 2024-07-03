import {
  CollingSystem,
  Elavator,
  FloorMaterial,
  HeatingSystem,
  Parking,
  WarHouse,
  Wc,
  WCType,
} from "../../icons/FetchHouseIcon";
import { toPersianNumbers } from "../../utils/FrormatNumber";

interface HouseCompleteFechersType {
  parking?: number;
  wc?: number;
  warhouse?: number;
  wctype?: string;
  elavator?: number;
  collingsystem?: string;
  floorMaterial?: string;
  heatingSystem?: string;
}

const HouseCompleteFechers: React.FC<HouseCompleteFechersType> = ({
  collingsystem,
  elavator,
  floorMaterial,
  heatingSystem,
  parking,
  warhouse,
  wc,
  wctype,
}) => {
  const Feachers = [
    {
      id: 1,
      text: "پارکینگ:",
      icon: <Parking />,
      body: `${parking ? toPersianNumbers(parking) : "۰"}`,
    },
    {
      id: 2,
      text: "سرویس بهداشتی:",
      icon: <Wc />,
      body: `${wc ? toPersianNumbers(wc) : "۰"}`,
    },
    {
      id: 3,
      text: "انباری:",
      icon: <WarHouse />,
      body: `${warhouse ? toPersianNumbers(warhouse) : "۰"}`,
    },
    {
      id: 4,
      text: "نوع سرویس بهداشتی:",
      icon: <WCType />,
      body: `${wctype}`,
    },
    {
      id: 5,
      text: "آسانسور:",
      icon: <Elavator />,
      body: `${elavator ? toPersianNumbers(elavator) : "۰"}`,
    },
    {
      id: 6,
      text: "سیستم سرمایش:",
      icon: <CollingSystem />,
      body: `${collingsystem}`,
    },
    {
      id: 7,
      text: "جنس کف:",
      icon: <FloorMaterial />,
      body: `${floorMaterial}`,
    },
    {
      id: 8,
      text: "سیستم گرمایش:",
      icon: <HeatingSystem />,
      body: `${heatingSystem}`,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-xl">امکانات</h2>
      <div className="flex flex-wrap justify-center items-center">
        {Feachers.map((fecher) => (
          <div key={fecher.id} className="w-1/2 flex gap-2 py-3">
            {fecher.icon}
            <p className="font-medium text-sm md:text-base">{fecher.text}</p>
            <p className="font-medium text-sm md:text-base">{fecher.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseCompleteFechers;
