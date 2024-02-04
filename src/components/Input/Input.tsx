import React from "react";

interface Props {
  type: "text" | "textarea" | "dropdown";
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const CustomInput = (props: Props) => {
  return (
    <div>
      <input
        className="border placeholder:text-sm w-full py-4 px-8 rounded-md border-black"
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
