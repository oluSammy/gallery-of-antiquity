"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import { IoLogoLinkedin } from "react-icons/io5";
import SliderControl from "@/components/SliderControl/SliderControl";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

const TeamSection = () => {
  return (
    <div className="container mx-auto mb-20">
      <p className="text-center sans font-semibold text-[#171717] text-4xl mb-3">
        Meet Our Team
      </p>
      <p className="text-center text-[#404040] font-normal text-xl mb-8 text-sm">
        A team of dynamic, highly qualified and skilled individuals with a
        desire to solve problems
      </p>

      <Carousel
        responsive={responsive}
        itemClass="pr-4"
        partialVisible={false}
        arrows
        customLeftArrow={<SliderControl dir="left" />}
        customRightArrow={<SliderControl dir="right" />}
        autoPlay
        shouldResetAutoplay
      >
        <div className="flex items-center justify-center">
          <Team
            imgSrc="/sunak.jpeg"
            name="Sunak Rishi"
            role="Facility Manager"
            linkedIn="/"
          />
        </div>
        <div className="flex items-center justify-center">
          <Team
            imgSrc="/obama.png"
            name="Barack Obama"
            role="CEO and Co-Founder"
            linkedIn="/"
          />
        </div>
        <div className="flex items-center justify-center">
          <Team
            imgSrc="/trump.jpeg"
            name="Donald Trump"
            role="CFO"
            linkedIn="/"
          />
        </div>
        <div className="flex items-center justify-center">
          <Team
            imgSrc="/biden.jpeg"
            name="Joseph Biden"
            role="President"
            linkedIn="/"
          />
        </div>
        <div className="flex items-center justify-center">
          <Team
            imgSrc="/justin.jpeg"
            name="Justin Trudeau"
            role="CTO"
            linkedIn="/"
          />
        </div>
      </Carousel>
    </div>
  );
};

const Team = ({
  imgSrc,
  name,
  role,
  linkedIn,
}: {
  imgSrc: string;
  name: string;
  role: string;
  linkedIn: string;
}) => {
  return (
    <div>
      <figure className="w-72 h-80">
        <Image
          src={imgSrc}
          width={300}
          height={250}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-[#AEB0B4] text-sm">{role}</p>
        </div>
        <Link href={linkedIn} className="mr-1">
          <IoLogoLinkedin color="#AEB0B4" />
        </Link>
      </div>
    </div>
  );
};

export default TeamSection;
