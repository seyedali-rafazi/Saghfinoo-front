import FooterConDown from "./FooterConDown";
import FooterConUP from "./FooterConUP";

const FooterContent: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <FooterConUP />
      <FooterConDown />
    </div>
  );
};

export default FooterContent;
