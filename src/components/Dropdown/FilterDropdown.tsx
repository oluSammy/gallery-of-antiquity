import React from "react";
import Dropdown from "./Dropdown";
import { TbFilterDiscount } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterDropdown = (props: Props) => {
  return (
    <Dropdown
      DropdownContent={
        <FilterDropdownContent
          options={props.options}
          selectedOptions={props.selectedOptions}
          setSelectedOptions={props.setSelectedOptions}
        />
      }
      DropdownTrigger={<FilterTrigger />}
    />
  );
};

const FilterDropdownContent = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: Props) => {
  return (
    <div>
      <ul className="py-4 overflow-hidden">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);

          const onClick = () => {
            if (isSelected) {
              const newSelections = selectedOptions.filter(
                (item) => option !== item
              );
              setSelectedOptions(newSelections);
            } else {
              setSelectedOptions([...selectedOptions, option]);
            }
          };

          return (
            <button
              className="px-4 py-2 text-[#908E9A] text-[15px] font-medium flex items-center cursor-pointer hover:bg-[#e4e1e1] w-full"
              key={option}
              onClick={onClick}
            >
              <div className="mr-2 min-w-[15px]">
                {isSelected && <IoMdCheckmark />}
              </div>
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const FilterTrigger = () => {
  return (
    <div className="border border-[#878994] rounded-md px-3 py-2 text-[#878994] text-base font-medium flex items-center">
      <TbFilterDiscount />
      <p className="ml-2">Filter</p>
    </div>
  );
};

export default FilterDropdown;
