import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown/Dropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

import Link from "next/link";

const links = [
  {
    label: "About",
    dropdown: [
      {
        link: "about",
        label: "About Us",
      },
      {
        link: "Making of Dap Centre",
        label: "making-of-daps",
      },
    ],
  },
  {
    label: "Visit",
    dropdown: [
      {
        link: "visit",
        label: "Plan Your Visit",
      },
      {
        link: "tickets",
        label: "Book Tickets",
      },
      {
        link: "group-visit",
        label: "Group Visit",
      },
    ],
  },
  {
    label: "Learn",
    dropdown: [
      {
        link: "History of States",
        label: "history",
      },
      {
        link: "library",
        label: "Library",
      },
    ],
  },
  {
    label: "Products",
    dropdown: [
      {
        link: "pictures",
        label: "Pictures",
      },
      {
        link: "souvenir",
        label: "Nigeria Souvenir",
      },
      {
        link: "books",
        label: "Books",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center px-8 pt-2 ">
      <Image
        src="/daps.png"
        alt="Daps Logo"
        width={150}
        height={10}
        className="mr-4 z-10"
      />
      <ul className="items-center hidden tab:flex ml-8">
        {links.map((link) => (
          <li key={link.label} className="mr-4">
            <Dropdown
              DropdownTrigger={
                <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                  {link.label}
                  <span className="ml-0.5">
                    <MdOutlineArrowDropDown size={22} />
                  </span>
                </span>
              }
              DropdownContent={
                <ul className="flex flex-col ">
                  {link.dropdown.map((item) => (
                    <Link
                      href={`/${item.link}`}
                      key={item.label}
                      className="px-6 py-1.5 w-full text-sm capitalize hover:bg-gray-50 "
                    >
                      {item.label}
                    </Link>
                  ))}
                </ul>
              }
            />
          </li>
        ))}
      </ul>

      <ul className="ml-auto hidden tab:flex items-center ">
        <button className="text-blue-link font-normal text-lg mr-3">
          Login
        </button>
        <button className="text-blue-link font-normal text-lg mr-3">
          Donate
        </button>
        <button className="flex items-center mr-3 border-r border-red-500">
          <RiSearch2Line color="#838488" />
          <span className="ml-0.5 text-[#666666] font-normal  text-lg">
            Search
          </span>
        </button>
        <button className="flex items-center text-blue-link text-lg">
          <span className="mr-1">Cart</span>
          <span className="relative">
            <HiOutlineShoppingBag size="20" />
            <span className="text-red-500 absolute top-1/2 left-1/2 text-xs mt-0.5 -translate-x-1/2 -translate-y-1/2 m-0 p-0">
              1
            </span>
          </span>
        </button>
      </ul>
      <button className="tab:hidden block ml-auto cursor-pointer">
        <IoMenuOutline size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
