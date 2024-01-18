import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const PrimaryButton = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link
      href={link}
      className="btn cursor-pointer w-fit bg-[#EB0B0B] text-xl font-bold px-8 py-4 mt-3 text-white flex items-center rounded-full "
    >
      {label}
      <span className="ml-2">
        <IoIosArrowRoundForward />
      </span>
    </Link>
  );
};

export default PrimaryButton;
