interface FilterOptionsType {
  items: any;
  active: number;
  handelClick: (e: { id: number; text: string; value: string }) => void;
  headerText: string;
}

interface ItemType {
  id: number;
  text: string;
  value: string;
}

const FilterOptions: React.FC<FilterOptionsType> = ({
  items,
  active,
  handelClick,
  headerText,
}) => {
  return (
    <div className="w-full space-y-3">
      <h4 className="font-semibold text-base">{headerText}</h4>
      <div className="flex font-medium text-sm">
        {items.map((item: ItemType) => (
          <button
            onClick={() => handelClick(item)}
            className={`py-1.5 w-20 border border-gray-250 ${
              item.id == active ? "bg-primary text-white duration-300" : ""
            }`}
            key={item.id}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
