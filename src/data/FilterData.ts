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

const WarhouseDetails: FilterTypea[] = [
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

const BathroomDetails: FilterTypea[] = [
  {
    id: 1,
    text: "1",
    value: "1",
  },
  {
    id: 2,
    text: "2",
    value: "2",
  },
  {
    id: 3,
    text: "3",
    value: "3",
  },
];

const BathroomTypeDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "ایرانی",
    value: "ایرانی",
  },
  {
    id: 3,
    text: "فرنگی",
    value: "فرنگی",
  },
];

const FilterElevatorDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "1",
    value: "1",
  },
  {
    id: 3,
    text: "2",
    value: "2",
  },
];

const FloorDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "همکف",
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

const CollingSystemDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "کولر آبی",
    value: "کولر آبی",
  },
  {
    id: 3,
    text: "اسپلیت",
    value: "اسپلیت",
  },
  {
    id: 4,
    text: "چیلر",
    value: "چیلر",
  },
];

const HeatingSystemDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "مرکزی",
    value: "مرکزی",
  },
  {
    id: 3,
    text: "اسپلیت",
    value: "اسپلیت",
  },
  {
    id: 4,
    text: "شومینه",
    value: "شومینه",
  },
  {
    id: 5,
    text: "رادیاتور",
    value: "رادیاتور",
  },
];

const FloorMaterialDetails: FilterTypea[] = [
  {
    id: 1,
    text: "مهم نیست",
    value: "",
  },
  {
    id: 2,
    text: "سنگ",
    value: "سنگ",
  },
  {
    id: 3,
    text: "سرامیک",
    value: "سرامیک",
  },
  {
    id: 4,
    text: "لمینت",
    value: "لمینت",
  },
  {
    id: 5,
    text: "چوب",
    value: "چوب",
  },
];

export {
  RoomDetails,
  ParkingDetails,
  WarhouseDetails,
  BathroomDetails,
  BathroomTypeDetails,
  FilterElevatorDetails,
  FloorDetails,
  CollingSystemDetails,
  HeatingSystemDetails,
  FloorMaterialDetails,
};
