"use client";

import Image from "next/image";

import "./style.css";
import { formatNumber } from "@/utils/formatnumber";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface Props {
  imgSrc: string;
  title: string;
  ageGroup?: string;
  price?: number;
  link: string
}

const TicketInfo = (props: Props) => {
  return (
    <div className="relative lg:w-fit w-full">
      <div className="relative ">
        <figure className="w-full h-80 bg-image">
          <Image
            src={props.imgSrc}
            alt={props.title}
            width={400}
            height={400}
            className="max-lg:w-full h-full object-cover"
          />
        </figure>
      </div>
      <div className="overlay"></div>
      <div className="absolute bottom-2 w-full px-4 ">
        <div className="flex items-center justify-between pb-3 border-b  border-[#7B7B7B]">
          <div>
            <p className="font-normal text-xl text-[#E5E5E5]">
              Ticket for {props.title}
            </p>
            <div>
              {props.ageGroup && (
                <p className="text-[#E5E5E5] inline mr-2 sans">
                  ({props.ageGroup})
                </p>
              )}
              {props.price && (
                <p className="text-white sans inline">
                  &#x20A6; {formatNumber(props.price)}
                </p>
              )}
            </div>
          </div>
          <Link
            href={props.link}
            className="bg-[#F31F2E] text-white rounded-full px-5 cursor-pointer font-semibold text-xs py-3 flex items-center "
          >
            <span className="mr-2">Book Ticket</span>
            <span className="flex h-4 w-4 rounded-full border items-center justify-center">
              <IoIosArrowRoundForward className="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
