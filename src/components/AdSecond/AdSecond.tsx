import AdHeader from "../../ui/AdHeader";
import AdSecondContent from "./AdSecondContent";

const AdSecond: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-stretch w-full md:px-8">
      <AdHeader />
      <AdSecondContent />
    </div>
  );
};

export default AdSecond;
