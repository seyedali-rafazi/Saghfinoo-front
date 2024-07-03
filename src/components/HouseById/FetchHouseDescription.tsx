interface FetchHouseDescriptionType {
  description?: string;
}

const FetchHouseDescription: React.FC<FetchHouseDescriptionType> = ({
  description,
}) => {
  return (
    <div className="w-full space-y-4">
      <h2 className="font-semibold text-xl">توضیحات</h2>
      <p className="font-medium">{description}</p>
    </div>
  );
};

export default FetchHouseDescription;
