"use client";

import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import Accordion from "../Accordion/Accordion";
import SliderDemo from "../Slider/Slider";

const sortValues = ["Latest", "Old", "High Price", "New Price"];

const SearchFilter = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
        <div className="lg:w-1/3 w-full relative lg:mb-0 mb-4">
          <input
            type="search"
            className="bg-[#EFF0F6] sans rounded-md pl-12 outline-none w-full text-sm px-6 py-4 placeholder:text-[#48474B] placeholder:text-sm"
            placeholder="Search Pictures"
          />
          <CiSearch
            className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1"
            size="25"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <Dropdown
              DropdownTrigger={
                <button className="text-[18px] font-normal bg-[#F6F6F6] p-2 px-4 flex items-center rounded-md">
                  Filter & Sort
                  <span className="ml-4">
                    <IoFilterOutline size={25} />
                  </span>
                </button>
              }
              DropdownContent={
                <ul className="flex flex-col pt-4 ">
                  <Accordion
                    classNames={{
                      trigger: "mb-5",
                      wrapper: "px-5",
                    }}
                    items={[
                      {
                        title: (
                          <button className="hover:bg-gray-300 font-bold text-base">
                            Sort
                          </button>
                        ),
                        content: sortValues.map((value) => (
                          <button
                            key={value}
                            className="mb-2 px-0.5 cursor-pointer flex justify-between items-center text-[#25213B] text-base font-normal w-full hover:bg-gray-100 py-1 "
                          >
                            <span>{value}</span>
                            <input
                              className="mr-1.5"
                              id="sort"
                              name="sort"
                              type="radio"
                            />
                          </button>
                        )),
                        value: "#232323",
                      },
                    ]}
                    type="single"
                  />
                  <Accordion
                    classNames={{
                      trigger: "mb-5",
                      wrapper: "px-5",
                    }}
                    items={[
                      {
                        title: (
                          <button className="hover:bg-gray-300 font-bold text-base">
                            Price
                          </button>
                        ),
                        content: <PriceRange />,
                        value: "#232323",
                      },
                    ]}
                    type="single"
                  />
                </ul>
              }
            />
          </div>

          <div>
            <Dropdown
              DropdownTrigger={
                <button className="text-[18px] font-normal bg-[#F6F6F6] p-2 px-4 flex items-center rounded-md">
                  Category
                  <span className="ml-4">
                    <BiCategoryAlt size={20} className="font-bold" />
                  </span>
                </button>
              }
              DropdownContent={
                <ul className="flex flex-col ">
                  <button className="px-5 py-2 cursor-pointer font-semibold text-base hover:bg-gray-100">
                    Nature
                  </button>
                  <button className="px-5 py-2 cursor-pointer text-base hover:bg-gray-100">
                    Forests
                  </button>
                  <button className="px-5 py-2 cursor-pointer text-base hover:bg-gray-100">
                    Cities
                  </button>
                  <button className="px-5 py-2 cursor-pointer text-base hover:bg-gray-100">
                    Buildings
                  </button>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceRange = () => {
  return (
    <div className="border-y border-[#E4E7EE] py-3 mb-6">
      <p className="text-[#928F8F] text-xs font-medium mb-1">Price Range</p>
      <div className="flex justify-between items-center mb-4">
        <PriceInput />
        <p>-</p>
        <PriceInput />
      </div>
      <SliderDemo />
    </div>
  );
};

const PriceInput = () => {
  return (
    <div className="relative">
      <input
        type="number"
        className="bg-transparent sans w-20 py-0.5 pl-6 border-[#E4E7EE] border "
      />
      <span className="absolute left-2 top-1/2 -translate-y-1/2">&#x20A6;</span>
    </div>
  );
};

export default SearchFilter;
