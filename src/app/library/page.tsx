"use client";

import PrimaryButton from "@/components/Button/PrimaryButton";
import PageLayout from "@/containers/PageLayout";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <PageLayout>
      <div className="lg:px-0 px-3">
        <div className="container mx-auto py-20">
          <h1 className="font-semibold text-4xl  text-[#363636] ">
            Our Library
          </h1>
          <div className="text-[#4C5760] font-extralight mt-5 text-justify text-xl lg:text-2xl leading-[30px] sans">
            <p>
              Gallery of Antiquity is unique in bringing together under one roof
              the culture of the nation, spanning tribes and people . No other
              museum is responsible for collections of the same depth and
              breadth, beauty and significance. Gallery of Antiquity is unique
              in bringing together under one roof the culture of the nation,
              spanning tribes and people . No other museum is responsible for
              collections of the same depth and breadth, beauty and
              significance. Gallery of Antiquity is unique in bringing together
              under one roof the culture of the nation, spanning tribes and
              people . No other museum is responsible for collections of the
              same depth and breadth, beauty and significance. Gallery of
              Antiquity is unique in bringing together under one roof the
              culture of the nation, spanning tribes and people . No other
              museum is responsible for collections of the same depth and
              breadth, beauty and significance.
            </p>
            <p className="mt-10">
              Gallery of Antiquity is unique in bringing together under one roof
              the culture of the nation, spanning tribes and people . No other
              museum is responsible for collections of the same depth and
              breadth, beauty and significance. Gallery of Antiquity is unique
              in bringing together under one roof the culture of the nation,
              spanning tribes and people . No other museum is responsible for
              collections of the same depth and breadth, beauty and
              significance.Gallery of Antiquity is unique in bringing together
              under one roof the culture of the nation, spanning tribes and
              people . No other museum is responsible for collections of the
              same depth and breadth, beauty and significance. DAP Experience
              Centre is unique in bringing together under one roof the culture
              of the nation, spanning tribes and people . No other museum is
              responsible for collections of the same depth and breadth, beauty
              and significance.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-10">
          <Image
            src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705540234/1.jpg_2_fjhd9h.png"
            width={1420}
            height={932}
            className="w-full h-full"
            alt="Dap Library"
          />
          <div className="mt-8">
            <PrimaryButton
              onClick={() => {}}
              link={"/books"}
              label="Buy Books"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
