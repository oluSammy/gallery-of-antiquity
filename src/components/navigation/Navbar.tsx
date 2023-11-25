import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Dropdown from "../Dropdown/Dropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Accordion from "../Accordion/Accordion";

interface Props {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  {
    label: "About",
    dropdown: [
      {
        link: "about",
        label: "About Us",
      },
      {
        link: "making-of-daps",
        label: "Making of Dap Centre",
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

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isMenuOpen) {
    return (
      <MobileNav
        setIsMenuOpen={setIsMenuOpen}
        setIsSearchOpen={props.setIsSearchOpen}
        isSearchOpen={props.isSearchOpen}
      />
    );
  }

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
        <button className="text-blue-link font-normal text-lg mr-3 cursor-pointer">
          Login
        </button>
        <button className="text-blue-link font-normal text-lg mr-3 cursor-pointer">
          Donate
        </button>
        <button
          className="flex items-center mr-3 border-r border-red-500 cursor-pointer"
          onClick={() => props.setIsSearchOpen(!props.isSearchOpen)}
        >
          <RiSearch2Line color="#838488" />
          <span className="ml-0.5 text-[#666666] font-normal  text-lg">
            Search
          </span>
        </button>
        <button className="flex items-center text-blue-link text-lg cursor-pointer">
          <span className="mr-1">Cart</span>
          <span className="relative">
            <HiOutlineShoppingBag size="20" />
            <span className="text-red-500 absolute top-1/2 left-1/2 text-xs mt-0.5 -translate-x-1/2 -translate-y-1/2 m-0 p-0">
              1
            </span>
          </span>
        </button>
      </ul>
      <button
        className="tab:hidden block ml-auto cursor-pointer"
        onClick={() => {
          // props.setIsSearchOpen(!false);
          setIsMenuOpen(true);
        }}
      >
        <IoMenuOutline size={30} />
      </button>
    </nav>
  );
};

const MobileNav = ({
  setIsMenuOpen,
  setIsSearchOpen,
  isSearchOpen,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
  isSearchOpen: boolean;
}) => {
  return (
    <div className="h-screen fixed overflow-y-scroll bg-white w-full z-50 pt-10 p-2 px-3">
      <div className="flex items-center mb-4">
        <Image
          src="/daps.png"
          alt="Daps Logo"
          width={100}
          height={10}
          className="mr-4 z-10"
        />
        <div className="ml-auto flex items-center  -mt-2 ">
          <button className="text-blue-link font-normal text-lg mr-3 cursor-pointer">
            Login
          </button>
          <button className="flex items-center text-blue-link text-lg cursor-pointer ml-2">
            <span className="mr-1">Cart</span>
            <span className="relative">
              <HiOutlineShoppingBag size="20" />
              <span className="text-red-500 absolute top-1/2 left-1/2 text-xs mt-0.5 -translate-x-1/2 -translate-y-1/2 m-0 p-0">
                1
              </span>
            </span>
          </button>
          <button
            className="cursor-pointer ml-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoIosClose size={40} />
          </button>
        </div>
      </div>
      <div>
        <button
          className="flex items-center mr-3 border-r border-red-500 cursor-pointer  mb-4"
          onClick={() => {
            setIsMenuOpen(false);
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <RiSearch2Line color="#838488" />
          <span className="ml-2 text-[#666666] font-semibold text-lg">
            Search
          </span>
        </button>
        {links.map((link) => (
          <Accordion
            key={link.label}
            classNames={{
              trigger: "mb-5",
            }}
            items={[
              {
                title: (
                  <button className="font-bold hover:bg-gray-300">
                    {link.label}
                  </button>
                ),
                content: link.dropdown.map((item) => (
                  <Link
                    href={`/${item.link}`}
                    key={item.label}
                    className="block mb-2 hover:bg-gray-300"
                  >
                    {item.label}
                  </Link>
                )),
                value: "#232323",
              },
            ]}
            type="single"
          />
        ))}
        <button className="text-blue-link font-bold text-lg mr-3 cursor-pointer">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Navbar;
