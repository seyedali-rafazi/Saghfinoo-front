import AdSecond from "../../components/AdSecond/AdSecond";
import AdPageLayout from "../../components/advertising/AdPageLayout";

const AdvertisingPrice: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center w-full h-full min-h-screen bg-slate-200 md:px-24 md:py-24">
      <div className="bg-cover bg-ad-background bg-center md:bg-none w-full md:h-full bg-white rounded-2xl flex justify-center items-center h-screen">
        <div className="w-1/3 hidden md:block">
          <img
            role="presentation"
            onError={(e) => {
              e.currentTarget.src = "/photos/default.webp";
            }}
            className="h-full max-h-[600px] w-full rounded-t-lg "
            src="/photos/advertising-background.webp"
            alt=""
          />
        </div>
        <div className="h-full w-full p-5 md:w-2/3">
          <AdSecond />
        </div>
      </div>
    </div>
=======
    <AdPageLayout>
      <AdSecond />
    </AdPageLayout>
>>>>>>> b0a58ad (initial refactor project)
  );
};

export default AdvertisingPrice;
