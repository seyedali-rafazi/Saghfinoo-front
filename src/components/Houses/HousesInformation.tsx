interface HousesInformationType {
  limit: number;
  children: React.ReactNode;
}

const HousesInformation: React.FC<HousesInformationType> = ({
  limit,
  children,
}) => {
  return (
    <div className="flex justify-between items-center">
      <h6 className="font-medium text-tint-700 flex gap-1">
        {limit}&nbsp;مورد <p className="hidden md:block">یافت شد</p>
      </h6>
      <div className="flex gap-2">{children}</div>
    </div>
  );
};

export default HousesInformation;
