interface FilterTypea {
  id: number;
  text: string;
  value: string;
}

const RoomDetails: FilterTypea[] = [
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
  {
    id: 5,
    text: "3",
    value: "3",
  },
];

const ParkingDetails: FilterTypea[] = [
  {
    id: 1,
    text: "هر تعداد",
    value: "",
  },
  {
    id: 2,
    text: "ندارد",
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

export { RoomDetails, ParkingDetails };
