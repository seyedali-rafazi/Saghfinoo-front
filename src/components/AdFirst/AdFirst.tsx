import AdHeader from "../../ui/AdHeader";
import AdFirstContent from "./AdFirstContent";

const AdFirst: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center h-full md:px-16">
      <AdHeader />
      <AdFirstContent />
      <div></div>
    </div>
  );
};

export default AdFirst;
