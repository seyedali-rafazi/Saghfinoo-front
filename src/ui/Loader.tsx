import { Oval, ThreeDots } from "react-loader-spinner";

interface LoadingType {
  width?: number;
}

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#cb1b1b"
        secondaryColor="#cb1b1b"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export function LoadingBars({ width }: Readonly<LoadingType>) {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots
        visible={true}
        height={width}
        width={width}
        color="#cb1b1b"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
