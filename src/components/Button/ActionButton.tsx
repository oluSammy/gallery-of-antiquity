import React from "react";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  onClick: () => void;
  label: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const ActionButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        `bg-[#FA0303] rounded-lg text-white font-medium text-base px-4 py-2 ${
          props.disabled ? "cursor-not-allowed" : "cursor-pointer"
        } ` + props.className
      }
      disabled={props.disabled}
    >
      {props.isLoading ? (
        <ThreeDots
          visible={true}
          height={20}
          width={50}
          color={"#ffffff"}
          radius="3"
          ariaLabel="three-dots-loading"
        />
      ) : (
        props.label
      )}
    </button>
  );
};

export default ActionButton;
