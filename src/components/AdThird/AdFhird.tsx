import AdHeader from "../../ui/AdHeader";
import AdThirdContent from "./AdThirdContent";

const AdFhird: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-stretch w-full md:px-8">
      <AdHeader />
      <AdThirdContent />
    </div>
  );
};

export default AdFhird;
