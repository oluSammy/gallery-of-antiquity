import { RxCaretRight, RxCaretLeft } from "react-icons/rx";

const SliderControl = ({
  dir,
  onClick,
}: {
  dir: "right" | "left";
  onClick?: () => void;
}) => {
  return (
    <button
      className={`arrow absolute ${
        dir === "right" ? "right-0" : "left-o"
      }  z-20 h-10 w-10 rounded-full flex items-center justify-center bg-white cursor-pointer shadow`}
      onClick={onClick}
      aria-label="slider control"
    >
      {dir === "right" ? (
        <RxCaretRight className="text-xl text-gray-10 font-bold" />
      ) : (
        <RxCaretLeft className="text-xl text-gray-10 font-bold" />
      )}
    </button>
  );
};

export default SliderControl;
