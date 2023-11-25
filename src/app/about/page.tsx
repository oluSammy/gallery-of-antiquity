import HistorySection from "@/components/HistorySection/HistorySection";
import TeamSection from "@/components/TeamSection/TeamSection";
import PageLayout from "@/containers/PageLayout";
import Image from "next/image";
import React from "react";

import "react-multi-carousel/lib/styles.css";

const page = () => {
  return (
    <PageLayout>
      <div>
        <div className="h-96 bg-[#231F20] w-full flex items-center justify-center">
          <div>
            <h1 className="text-white font-medium text-[60px]">About Us</h1>
            <h6 className="text-[#DBD8D8] font-normal text-xl text-center">
              The Future Of Museum
            </h6>
          </div>
        </div>
        <div className="my-28 text-center container mx-auto sans text-[#4C5760] text-xl font-light px-6 lg:px-28">
          <p>
            DAP Experience Centre is unique in bringing together under one roof
            the culture of the nation, spanning tribes and people . No other
            museum is responsible for collections of the same depth and breadth,
            beauty and significance.
          </p>
          <p className="mt-8">
            Its objects allow us to explore the extraordinary diversity of human
            cultures, from small communities to vast empires, to discover the
            many forms and expressions human beings have given to every aspect
            of life, and to realize how closely they are interconnected.
          </p>
        </div>

        <div className="container mx-auto mb-20">
          <div className="grid grid-cols-12 gap-x-10">
            <div className="lg:col-span-7 col-span-full ">
              <figure className="relative">
                <Image
                  src="/museum-02.jpg"
                  width={300}
                  height={700}
                  alt="Daps Experience center"
                  className="w-full h-full object-cover "
                />
              </figure>
            </div>
            <div className="col-span-full lg:col-span-5 lg:px-0 px-5 lg:mt-0 mt-5 ">
              <h4 className="text-[#00223C] text-4xl font-medium">Mission</h4>
              <p className="text-[#4C5760] font-light mt-4 text-xl">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget.. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Feugiat eget.
                </span>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget.. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Feugiat eget.
                </p>
              </p>

              <h4 className="text-[#00223C] text-4xl font-medium mt-16">
                Vission
              </h4>
              <p className="text-[#4C5760] font-light mt-4 text-xl">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget.. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Feugiat eget.
                </span>
              </p>
            </div>
          </div>
        </div>

        <TeamSection />

        <HistorySection />
      </div>
    </PageLayout>
  );
};

export default page;
