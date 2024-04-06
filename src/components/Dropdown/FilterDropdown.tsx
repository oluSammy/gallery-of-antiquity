import React from "react";
import Dropdown from "./Dropdown";
import { TbFilterDiscount } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import Accordion from "../Accordion/Accordion";

type Props = {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  type?: "single" | "multi";
  title?: string;
};

type DropdownProp = {
  prop: Props[];
};

interface DropdownContentProp extends Props {
  useAccordion: boolean;
}

const FilterDropdown = ({ prop }: DropdownProp) => {
  return (
    <Dropdown
      DropdownContent={
        <div className="max-h-64 overflow-y-scroll">
          {prop.map((p, idx) => (
            <FilterDropdownContent
              options={p.options}
              selectedOptions={p.selectedOptions}
              setSelectedOptions={p.setSelectedOptions}
              type={p.type}
              key={idx}
              useAccordion={prop.length > 1}
              title={p.title}
            />
          ))}
        </div>
      }
      DropdownTrigger={<FilterTrigger />}
    />
  );
};

const FilterDropdownContent = ({
  options,
  selectedOptions,
  setSelectedOptions,
  type = "multi",
  title,
  useAccordion,
}: DropdownContentProp) => {
  if (useAccordion) {
    return (
      <Accordion
        classNames={{
          trigger: "mb-2 mt-2",
          wrapper: "px-5",
        }}
        items={[
          {
            title: (
              <button className="hover:bg-gray-300 font-bold text-base ">
                {title}
              </button>
            ),
            content: (
              <ul className="py-1 overflow-hidden">
                {options.map((option) => {
                  const isSelected = selectedOptions.includes(option);

                  const onClick = () => {
                    if (type === "single") {
                      return setSelectedOptions([option]);
                    }

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
            ),
            value: "#232323",
          },
        ]}
        type="single"
      />
    );
  }
  return (
    <ul className="py-4 overflow-hidden">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option);

        const onClick = () => {
          if (type === "single") {
            return setSelectedOptions([option]);
          }

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
