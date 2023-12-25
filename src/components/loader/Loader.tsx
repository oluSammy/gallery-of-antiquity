import { ThreeDots } from "react-loader-spinner";

const Loader = ({
  width,
  height,
  color = "white",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <ThreeDots
        visible={true}
        height={height}
        width={width}
        color={color || "#4fa94d"}
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
