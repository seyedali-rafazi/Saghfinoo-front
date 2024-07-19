import { FooterDownLay } from "../../icons/Footer";
import FooterContent from "./FooterContent";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col  justify-between pt-5 px-5 w-full min-h-96 bg-gray-100">
      <div className="w-full">
        <h1 className="font-bold text-xl md:text-3xl text-center">
          سقفینو؛ سقفی ایده‌آل برای زندگی
        </h1>
      </div>
      <FooterContent />
      <div className="flex items-center justify-center w-full">
        <FooterDownLay />
      </div>
    </div>
  );
};

export default Footer;
