import AdHeader from "../../ui/AdHeader";
import AdThirdContent from "./AdThirdContent";

const AdFhird: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center md:px-16">
      <AdHeader />
      <AdThirdContent />
      <div></div>
    </div>
  );
};

export default AdFhird;
