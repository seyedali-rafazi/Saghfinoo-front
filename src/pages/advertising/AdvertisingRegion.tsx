import AdFirst from "../../components/AdFirst/AdFirst";

const AdvertisingRegion: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen  bg-slate-200 md:px-24 md:py-24">
      <div className="w-full h-screen md:h-full  bg-white rounded-2xl flex justify-center items-center">
        <div className="w-1/3 hidden md:block">
          <img
            className="h-full max-h-[600px] w-full rounded-t-lg "
            src="/photos/advertising-background.png"
            alt=""
          />
        </div>
        <div className="h-full w-full p-5 md:w-2/3">
          <AdFirst />
        </div>
      </div>
    </div>
  );
};

export default AdvertisingRegion;
