import { useState } from "react";
import { useDispatch } from "react-redux";
import { PiBookmarkSimpleFill, PiBookmarkSimpleLight } from "react-icons/pi";
import { Download } from "../../icons/FetchHouseIcon";
import { Property } from "../../types/property";
import { downloadPropertyInfo } from "../../utils/downloadProperty";
import { isFavorite } from "../../services/propertyService";
import { favouriteHouse } from "../../redux/feachers/favourtieProduct/favourtieProductAction";
import { AppDispatch } from "../../redux/store/store";

interface FetchHousrHeaderType {
  property: Property;
}

const FetchHousrHeader: React.FC<FetchHousrHeaderType> = ({ property }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [saved, setSaved] = useState(() => isFavorite(property._id));

  const handleDownload = () => {
    downloadPropertyInfo(property);
  };

  const handleSave = async () => {
    await dispatch(favouriteHouse({ id: property._id }));
    setSaved(isFavorite(property._id));
  };

  return (
    <div className="space-y-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-sm md:text-base text-gray-400">
              {property.houseGroup.title} خانه در {property.city}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button onClick={handleDownload} title="دانلود مشخصات">
              <Download />
            </button>
            <button onClick={handleSave} title="ذخیره در علاقه‌مندی‌ها">
              {saved ? (
                <PiBookmarkSimpleFill className="w-7 h-7 text-primary" />
              ) : (
                <PiBookmarkSimpleLight className="w-7 h-7 text-gray-800" />
              )}
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg lg:text-xl">{property.title}</p>
        </div>
      </div>
    </div>
  );
};

export default FetchHousrHeader;
