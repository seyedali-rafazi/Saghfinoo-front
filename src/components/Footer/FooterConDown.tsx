import { FooterConDownDatas } from "../../data/FooterData";
import { Logo } from "../../icons/homeIcon";

const FooterConDown: React.FC = () => {
  return (
    <div className="w-full py-8 flex justify-between px-3 lg:px-14">
      <div className="w-full lg:w-1/3 px-3 space-y-3">
        <div>{Logo}</div>
        <div className="space-y-2">
          <h3 className="font-semibold">تجربه لذت خانه‌دار شدن سریع و آسان</h3>
          <p className="font-medium text-gray-450 text-sm">
            سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
            ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
            املاک معتمد و متخصص شهرتان در ارتباط باشید.
          </p>
        </div>
      </div>
      <div className="w-3/4 hidden lg:block">
        <div className="w-full h-full flex items-center justify-between">
          {FooterConDownDatas.map((FooterConUPData) => (
            <div
              className="flex flex-col gap-3 justify-start items-start h-full"
              key={FooterConUPData.id}
            >
              <h3 className="font-semibold">{FooterConUPData.header}</h3>
              <div className="flex flex-col">
                {FooterConUPData.contents.map((content) => (
                  <div key={content.id}>
                    <p className="font-medium text-sm text-gray-450">
                      {content.muli}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterConDown;
