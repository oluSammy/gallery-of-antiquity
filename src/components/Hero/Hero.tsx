"use client";

import "./hero.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { useRef, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    vidRef.current?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    vidRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="hero">
      <video autoPlay loop muted playsInline ref={vidRef} className="bg-video">
        <source src="https://res.cloudinary.com/olumorinsamuel/video/upload/v1700597392/musuem_rlvudt.mp4" type="video/mp4" />
      </video>
      <div className="overlay group">
        <h1 className="text-white lg:text-left text-center font-bold text-4xl lg:text-[51px] lg:leading-[52px] ">
          Welcome to Dap <br className="lg:block hidden" /> Experience Centre
        </h1>
        <p className="text-[#FDFDFD] font-light text-sm my-8 text-justify">
          Come explore many years of Culture and history of the nation Nigeria{" "}
          <br className="lg:block hidden" />
          with it’s diverse tribes and languages in our center.
        </p>

        <Link href="/visit" className="btn cursor-pointer w-fit bg-[#EB0B0B] text-xl font-bold px-8 py-4 mt-3 text-white flex items-center rounded-full ">
          Plan Your Visit
          <span className="ml-2">
            <IoIosArrowRoundForward />
          </span>
        </Link>

        <button
          className="p-3 rounded-full cursor-pointer absolute max-lg:bottom-2 max-lg:right-2 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          style={{ border: "2px solid #fff" }}
          onClick={isPlaying ? handlePause : handlePlay}
        >
          {isPlaying ? (
            <IoPauseOutline color="#ffffff" size={20} />
          ) : (
            <CiPlay1 color="#ffffff" size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
