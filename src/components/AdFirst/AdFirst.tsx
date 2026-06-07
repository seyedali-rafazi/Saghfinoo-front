import AdHeader from "../../ui/AdHeader";
import AdFirstContent from "./AdFirstContent";

const AdFirst: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-stretch w-full md:px-8">
      <AdHeader />
      <AdFirstContent />
    </div>
  );
};

export default AdFirst;
