import AdHeader from "../../ui/AdHeader";
import AdSecondContent from "./AdSecondContent";

const AdSecond: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center h-full md:px-16">
      <AdHeader />
      <AdSecondContent />
      <div></div>
    </div>
  );
};

export default AdSecond;
