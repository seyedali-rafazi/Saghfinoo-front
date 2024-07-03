interface HeaderText {
  headerText: string;
}

const HousesHeader: React.FC<HeaderText> = ({ headerText }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{headerText}</h1>
    </div>
  );
};

export default HousesHeader;
