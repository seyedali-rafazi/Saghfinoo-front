import { Property } from "../types/property";
import { toPersianNumbersWithComma } from "./FrormatNumber";

export function downloadPropertyInfo(property: Property) {
  const content = `
سقفینو - مشخصات ملک
========================

عنوان: ${property.title}
نوع: ${property.houseGroup.title}
شهر: ${property.city}
قیمت: ${toPersianNumbersWithComma(property.price)} تومان

اتاق خواب: ${property.rooms}
طبقه: ${property.floor}
پارکینگ: ${property.parking}
سرویس بهداشتی: ${property.WC} (${property.WCType})
انباری: ${property.warHouse}
آسانسور: ${property.elevator ? "دارد" : "ندارد"}
سیستم سرمایش: ${property.collingSystem}
سیستم گرمایش: ${property.heatingSystem}
جنس کف: ${property.floorMaterial}

موقعیت: ${property.lat}, ${property.lng}

توضیحات:
${property.description}
`.trim();

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `saghfinoo-${property._id}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
