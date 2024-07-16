import HomeSearchBox from "./HomeSearchBox";

const HomeIntro: React.FC = () => {
  return (
    <div className="bg-cover bg-home-introduction bg-center h-[580px] w-full mx-auto bg-cyan-100 flex flex-col pb-24 justify-end items-center gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold text-5xl text-white">
          سقفینو ٬ سقفی برای همه
        </h1>
        <h2 className="text-center font-bold text-2xl text-white">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h2>
      </div>
      <HomeSearchBox />
    </div>
  );
};

export default HomeIntro;
