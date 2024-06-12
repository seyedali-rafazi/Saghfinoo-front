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
      <div className="flex flex-col bg-gray-100 rounded-lg border border-gray-200">
        <div>
          <img className="rounded-t-lg" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center w-full py-5">
          <p className="font-bold">{header}</p>
          <p className="p-2">{truncateText({ str: text, length: 50 })}</p>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SwiperSlideSimple;
