import React, { Dispatch, SetStateAction } from "react";
import { CiSearch, CiClock2 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface Props {
  closeSearch: Dispatch<SetStateAction<boolean>>;
}

const SearchBox = (props: Props) => {
  return (
    <div className="h-[93vh] bg-black -mt-4">
      <div className="container mx-auto py-8 lg:px-0 px-6">
        <h1 className="font-normal text-white text-2xl mb-6 lg:text-[41px]">
          Search
        </h1>
        <div className="relative">
          <input
            type="search"
            className="w-full border bg-transparent h-16 rounded-xl outline-none px-4 text-white text-xl sans pl-14"
            placeholder="What are you looking for"
          />
          <CiSearch className="absolute text-white text-2xl lg:text-4xl left-1 top-1/2 -translate-y-1/2" />
          <button
            onClick={() => props.closeSearch(false)}
            className="cursor-pointer"
          >
            <IoMdClose className="absolute text-white text-2xl lg:text-4xl right-1 top-1/2 -translate-y-1/2" />
          </button>
        </div>
        <div className="relative w-full bg-[#343333] mt-2 text-white p-4 ">
          <div className="flex items-center mb-2">
            <CiClock2 />
            <p className="text-white font-normal text-base ml-4">
              Plan your visit
            </p>
          </div>
          <div className="flex items-center mb-2">
            <CiClock2 />
            <p className="text-white font-normal text-base ml-4">Tickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
