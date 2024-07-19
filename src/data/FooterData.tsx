import { Instagram, Phone, Telegram } from "../icons/Footer";

interface Content {
  id: number;
  muli: string;
  icon?: JSX.Element;
}

interface FooterData {
  id: number;
  header: string;
  contents: Content[];
}

const FooterConUPDatas: FooterData[] = [
  {
    id: 1,
    header: "بازارهای املاک و مستغلات",
    contents: [
      { id: 1, muli: "بازار املاک و مستغلات تهران" },
      { id: 2, muli: "بازار املاک و مستغلات اصفهان" },
      { id: 3, muli: "بازار املاک و مستغلات شمال" },
    ],
  },
  {
    id: 2,
    header: "بیشترین جست‌وجوها",
    contents: [
      { id: 1, muli: "آپارتمان نزدیک مترو" },
      { id: 2, muli: "خانه نزدیک بر اصلی خیابان" },
      { id: 3, muli: "آپارتمان تک واحده" },
    ],
  },
  {
    id: 3,
    header: "پرامتیازترین مشاوران املاک",
    contents: [
      { id: 1, muli: "میترا جباری" },
      { id: 2, muli: "حسام‌الدین عزیزی" },
      { id: 3, muli: "بهرام مشعوف" },
    ],
  },
  {
    id: 4,
    header: "با ما در ارتباط باشید",
    contents: [
      { id: 1, muli: "تلفن", icon: <Phone /> },
      { id: 2, muli: "اینستاگرام", icon: <Instagram /> },
      { id: 3, muli: "تلگرام", icon: <Telegram /> },
    ],
  },
];
const FooterConDownDatas: FooterData[] = [
  {
    id: 1,
    header: "خدمات",
    contents: [
      { id: 1, muli: "اجاره" },
      { id: 2, muli: "خرید" },
      { id: 3, muli: " ثبت رایگان آگهی ملک" },
      { id: 4, muli: "املاک و مستغلات" },
      { id: 5, muli: "مشاورین املاک" },
      { id: 6, muli: "اخبار روز املاک" },
      { id: 7, muli: "سوال ملکی دارید؟" },
    ],
  },
  {
    id: 2,
    header: "اطلاعات",
    contents: [
      { id: 1, muli: "دانلود اپلیکشن سقفینو" },
      { id: 2, muli: "تماس با ما" },
      { id: 3, muli: "داستان ‌سقفینو" },
      { id: 4, muli: "پرسش‌های پرتکرار" },
      { id: 5, muli: "یک سقف؛ بلاگ سقفینو " },
      { id: 6, muli: "حریم شخصی شما" },
      { id: 7, muli: "تعهدات ما و شما" },
    ],
  },
  {
    id: 3,
    header: "حساب کاربری",
    contents: [
      { id: 1, muli: "پروفایل من" },
      { id: 2, muli: "ملک‌های نشان‌شده" },
      { id: 3, muli: "آگهی‌های من" },
    ],
  },
];

export { FooterConUPDatas, FooterConDownDatas };
