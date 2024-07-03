import { Floor, Metr, Room } from "../../icons/FetchHouseIcon";
import { toPersianNumbers } from "../../utils/FrormatNumber";

interface HouseFeachersType {
  floor: number;
  rooms: number;
}

const HouseFeachers: React.FC<HouseFeachersType> = ({ floor, rooms }) => {
  const Feachers = [
    {
      id: 1,
      title: "متراژ",
      text: ` ${toPersianNumbers("115")} متر`,
      icon: <Metr />,
    },
    {
      id: 2,
      title: "اتاق",
      text: `${rooms ? toPersianNumbers(rooms) : "۰"} اتاق`,
      icon: <Room />,
    },
    {
      id: 3,
      title: "طبقه",
      text: ` طبقه ${floor ? toPersianNumbers(floor) : "۰"}`,
      icon: <Floor />,
    },
  ];
  return (
    <div className="w-full flex justify-between items-center ">
      {Feachers.map((feacher) => (
        <div
          className="flex flex-col justify-center items-center"
          key={feacher.id}
        >
          <div className="flex gap-2">
            {feacher.icon}
            <p className="font-bold text-xl">{feacher.title}</p>
          </div>
          <div className="w-full">
            <p className="w-full text-center font-medium">{feacher.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseFeachers;
