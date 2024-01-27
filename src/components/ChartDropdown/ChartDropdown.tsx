import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

const ChartDropdown = (props: Props) => {
  return (
    <Dropdown
      DropdownTrigger={
        <button className="text-[18px] font-normal bg-[#F6F6F6] p-2 px-4 flex items-center rounded-md">
          {props.selectedOption}
          <span className="ml-4">
            <RiArrowDropDownLine size={25} />
          </span>
        </button>
      }
      DropdownContent={
        <ul className="flex flex-col pt-4 ">
          {props.options.map((option) => (
            <button
              className={`${
                option === props.selectedOption
                  ? "text-black bg-[#e4e1e1]"
                  : "text-[#6C6D6F]"
              } text-sm font-normal mb-1 cursor-pointer capitalize py-2 px-4 hover:bg-[#e4e1e1]`}
              onClick={() => props.setSelectedOption(option)}
              key={option}
            >
              {option}
            </button>
          ))}
        </ul>
      }
    />
  );
};

export default ChartDropdown;
