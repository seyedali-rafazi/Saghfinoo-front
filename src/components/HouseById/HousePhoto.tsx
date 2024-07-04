interface HousePhotoType {
  fetchHouse: any;
}

const HousePhoto: React.FC<HousePhotoType> = ({ fetchHouse }) => {
  console.log(fetchHouse);
  return (
    <div className="w-full md:w-1/2 space-y-14">
      <div className="relative w-full h-[340px] bg-cover rounded-lg">
        <img
          className="absolute inset-0 w-full h-[340px] object-cover rounded-lg"
          src={fetchHouse?.imageLink}
          alt=""
        />
      </div>
    </div>
  );
};

export default HousePhoto;
