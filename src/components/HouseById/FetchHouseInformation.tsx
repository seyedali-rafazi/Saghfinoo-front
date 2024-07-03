import FechHousePrice from "./FechHousePrice";
import FetchHousrHeader from "./FetchHousrHeader";
import HouseCompleteFechers from "./HouseCompleteFechers";
import HouseFeachers from "./HouseFeachers";

interface FetchHouseInformationType {
  houseById: any;
}

const FetchHouseInformation: React.FC<FetchHouseInformationType> = ({
  houseById,
}) => {
  let fetchHouse = houseById?.data?.product;
  console.log(fetchHouse);

  return (
    <div className="w-full md:w-1/2 space-y-14">
      <FetchHousrHeader
        city={fetchHouse?.city}
        title={fetchHouse?.title}
        titleGroup={fetchHouse?.houseGroup?.title}
      />
      <HouseFeachers floor={fetchHouse?.floor} rooms={fetchHouse?.rooms} />
      <FechHousePrice city={fetchHouse?.city} />
      <HouseCompleteFechers
        parking={fetchHouse?.parking}
        wc={fetchHouse?.WC}
        warhouse={fetchHouse?.warHouse}
        wctype={fetchHouse?.WCType}
        elavator={fetchHouse?.elevator}
        collingsystem={fetchHouse?.collingSystem}
        floorMaterial={fetchHouse?.floorMaterial}
        heatingSystem={fetchHouse?.heatingSystem}
      />
    </div>
  );
};

export default FetchHouseInformation;
