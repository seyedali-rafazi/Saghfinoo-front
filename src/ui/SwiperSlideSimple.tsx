import { SwiperSlide } from "swiper/react";
import { truncateText } from "../utils/TruncateText";

interface SwiperSlideSimpleType {
  id: number;
  image: string;
  header?: string | number;
  text: string;
}

const SwiperSlideSimple: React.FC<SwiperSlideSimpleType> = ({
  id,
  image,
  header,
  text,
}) => {
  return (
    <SwiperSlide key={id}>
      <div className="flex flex-col bg-gray-100 rounded-lg border border-gray-200 h-full">
        <div className="min-h-56 h-full">
          <img
            role="presentation"
            onError={(e) => {
              e.currentTarget.src = "/photos/default.webp";
            }}
            className="rounded-t-lg object-cover h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full py-5">
          <p className="font-bold">{header}</p>
          <p className="p-2 font-medium">
            {truncateText({ str: text, length: 50 })}
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SwiperSlideSimple;
