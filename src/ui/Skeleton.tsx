interface SkeletonType {
  cards: number;
}

const Skeleton: React.FC<SkeletonType> = ({ cards }) => {
  return Array.from({ length: cards }).map((_, index) => (
    <div key={index} className="space-y-5 border rounded-lg h-fit w-full">
      <div className="animate-pulse relative w-full h-32 bg-gray-200 rounded-lg"></div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center text-gray-350 text-sm font-medium"></div>
        <p className="animate-pulse w-full h-2 bg-gray-200"></p>
        <p className="animate-pulse w-full h-2 bg-gray-200 "></p>
        <div className="animate-pulse w-full h-6 bg-gray-200"></div>
      </div>
    </div>
  ));
};

export default Skeleton;
