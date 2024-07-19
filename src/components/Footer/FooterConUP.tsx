import React from "react";
import { FooterConUPDatas } from "../../data/FooterData";

const FooterConUP: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-6 content-start lg:flex items-center justify-items-center lg:justify-between lg:border-b lg:border-gray-400 py-8 px-3 lg:px-14">
      {FooterConUPDatas.map((FooterConUPData) => (
        <div className="flex flex-col gap-3 h-full" key={FooterConUPData.id}>
          <h3 className="font-semibold">{FooterConUPData.header}</h3>
          <div className="flex flex-col">
            {FooterConUPData.contents.map((content) => (
              <div key={content.id} className="flex items-center gap-2">
                {content.icon && <span>{content.icon}</span>}
                <p className="font-medium text-sm text-gray-450">
                  {content.muli}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterConUP;
