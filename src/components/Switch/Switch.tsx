import { Dispatch, FC, SetStateAction } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

interface Props {
  checked: boolean;
  label?: string;
  id?: string;
  disabled?: boolean;
  onChange: Dispatch<SetStateAction<boolean>> | (() => void);
  onClick?: () => void;
  variant?: "default" | "small";
}

const variantClassNames = {
  root: {
    default: "h-8 w-[50px]",
    small: "h-6 w-[40px]",
  },
  thumb: {
    default: "h-6 w-6 translate-x-0.5",
    small: "h-4 w-4 translate-x-0.5",
  },
};

const Switch: FC<Props> = ({
  label,
  checked,
  disabled = false,
  onChange,
  id,
  onClick,
  variant = "default",
}) => (
  <div className="flex items-center">
    {label && (
      <label
        className="pr-[15px] text-[15px] leading-none text-white"
        htmlFor={id || label}
      >
        {label}
      </label>
    )}
    <RadixSwitch.Root
      className={`
        group relative ${variantClassNames.root[variant]} cursor-pointer rounded-full border-2 border-gray-70
        bg-[#E2E2E5] outline-none
        data-[state=checked]:bg-[#FF4250]`}
      id={id || label}
      checked={checked}
      onCheckedChange={(e) => onChange(e)}
      aria-label="switch"
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <RadixSwitch.Thumb
        className={`
          block ${variantClassNames.thumb[variant]} rounded-full bg-gray-50
          transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] 
          data-[state=checked]:bg-purple-50 data-[state=checked]:group-hover:bg-purple-40 data-[state=unchecked]:group-hover:bg-gray-40
        `}
      />
    </RadixSwitch.Root>
  </div>
);

export default Switch;
