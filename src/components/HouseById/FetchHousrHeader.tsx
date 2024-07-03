import { Download, SaveFavourite } from "../../icons/FetchHouseIcon";

interface FetchHousrHeaderType {
  city: string;
  titleGroup: string;
  title: string;
}

const FetchHousrHeader: React.FC<FetchHousrHeaderType> = ({
  city,
  titleGroup,
  title,
}) => {
  return (
    <div className="space-y-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-400">
              {titleGroup} خانه در {city}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button>
              <Download />
            </button>
            <button>
              <SaveFavourite />
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FetchHousrHeader;
