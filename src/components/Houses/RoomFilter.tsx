import { useState } from "react";

const RoomDetails = [
  {
    id: 1,
    text: "هر تعداد",
    value: "",
  },
  {
    id: 2,
    text: "بدون اتاق",
    value: "0",
  },
  {
    id: 3,
    text: "1",
    value: "1",
  },
  {
    id: 4,
    text: "2",
    value: "2",
  },
];

const RoomFilter: React.FC = () => {
  const [active, setActive] = useState(1);

  const handelClick = (e: number) => {
    setActive(e);
  };

  return (
    <div className="w-full space-y-3">
      <h4 className="font-semibold text-base">اتاق خواب</h4>
      <div className="flex font-medium text-sm">
        {RoomDetails.map((RoomDetail) => (
          <button
            onClick={() => handelClick(RoomDetail.id)}
            className={`py-1.5 w-20 border border-gray-250 ${
              RoomDetail.id == active
                ? "bg-primary text-white duration-300"
                : ""
            }`}
            key={RoomDetail.id}
          >
            {RoomDetail.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomFilter;
