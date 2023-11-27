"use client";

import DarkHero from "@/components/DarkHero/DarkHero";
import PageLayout from "@/containers/PageLayout";
import Image from "next/image";
import { useQueryState } from "next-usequerystate";
import TicketInfo from "@/components/TicketInfo/TicketInfo";
import { useEffect, useRef } from "react";
import TabsDemo from "@/components/Tabs/Tabs";
import Accordion from "@/components/Accordion/Accordion";

const btnStyle = `border-2 border-black w-1/4 text-center pb-8 cursor-pointer`;

const tabs = [
  {
    title: "Ticket Info.",
    link: "ticket",
    ref: "ticketRef",
  },
  {
    title: "Opening Hours",
    link: "opening-hours",
    ref: "openingHrsRef",
  },
  {
    title: "Locations",
    link: "locations",
    ref: "locationRef",
  },
  {
    title: "Know before you go",
    link: "know-before-you-go",
    ref: "knowBeforeRef",
  },
];

const Page = () => {
  const [tab, setTab] = useQueryState("tab");

  useEffect(() => {
    setTab("ticket");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ticketRef = useRef<HTMLDivElement>(null);
  const openingHrsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const knowBeforeRef = useRef<HTMLDivElement>(null);

  const refs = {
    ticketRef,
    openingHrsRef,
    locationRef,
    knowBeforeRef,
  };

  return (
    <PageLayout>
      <DarkHero
        title="Plan your visit"
        subtitle="Everything you need to know before visiting the centre"
        align="left"
      />

      <div className="container mx-auto my-20 sticky top-0 bg-white z-20">
        <div className="flex border-b flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.link}
              style={{
                borderBottom: tab === t.link ? "2px solid black" : "",
              }}
              className={`${btnStyle} ${
                tab === t.link
                  ? "font-semibold text-[#0E153A]"
                  : "text-[#727273] font-normal"
              } lg:text-2xl md:text-base sm:text-xs text-[9px]`}
              onClick={() => {
                setTab(t.link);
                refs[t.ref as keyof typeof refs].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div className="my-20" id="ticket" ref={refs.ticketRef}>
        <div className="text-center mb-8">
          <h4 className="font-bold text-[#FA0303] text-sm">Bookings</h4>
          <h6 className="text-[#1B2336] font-semibold text-3xl lg:text-[42px]">
            Ticket Information
          </h6>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 max-xl:gap-6 gap-2 justify-center lg:px-0 px-4">
            <div className="col-span-full lg:col-span-4">
              <TicketInfo
                imgSrc="/seniors-ticket.png"
                price={15000}
                title="Seniors"
                ageGroup="70 >"
              />
            </div>

            <div className="col-span-full lg:col-span-4">
              <TicketInfo
                imgSrc="/adult-ticket.png"
                price={15000}
                title="Adults"
              />
            </div>
            <div className="col-span-full lg:col-span-4">
              <TicketInfo
                imgSrc="/children-ticket.png"
                price={15000}
                title="Children"
              />
            </div>
            <div className="col-span-full lg:col-span-4">
              <TicketInfo
                imgSrc="/children-ticket.png"
                price={5000}
                title="child"
                ageGroup="under 13"
              />
            </div>
            <div className="col-span-full lg:col-span-4">
              <TicketInfo
                imgSrc="/children-ticket.png"
                title="groups"
                ageGroup="From 5 people"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20" id="opening-hours" ref={refs.openingHrsRef}>
        <div className="text-center mb-8">
          <h6 className="text-[#1B2336] font-semibold text-3xl lg:text-[42px]">
            Opening Hours
          </h6>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <figure className="col-span-12 h-[676px] w-full mb-8">
              <Image
                src="/musuem-01.jpg"
                alt="Dap musuem"
                width={400}
                height={400}
                className="max-lg:w-full h-full w-full object-cover"
              />
            </figure>
          </div>
          <div className="grid grid-cols-12 border mt-10 p-10">
            <div className="col-span-full lg:col-span-6">
              <h5 className="text-black font-medium text-3xl ">
                Hour & Admission
              </h5>
              <div className="w-full lg:w-4/6">
                <p className="text-[#4C5760]  mb-20 sans font-light text-justify text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur Lorem ipsum dolor sit amet, consectetur .
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur Lorem ipsum dolor sit amet, consectetur
                </p>
                <h5 className="text-[#FF5454] font-medium text-xl text-left">
                  Public holidays:
                </h5>
                <p className="text-[#4C5760] sans font-light text-justify text-base mt-4">
                  It remains open on all other public holidays except otherwise
                  which should be communicated here.
                </p>
              </div>
            </div>
            <div className="col-span-full lg:col-span-6">
              <div>
                <div className="flex text-2xl sans px-0 lg:px-10">
                  <div className="w-full py-6">
                    <p className="text-[#383838] font-bold">
                      10:00 AM &#x2192; 10:00PM
                    </p>
                    <p className="text-[#696161] font-light text-2xl">
                      Mondays - Sundays
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex text-2xl  sans px-0 lg:px-10">
                  <div className="w-full py-6">
                    <p className="text-[#383838] font-bold">8:00PM</p>
                    <p className="text-[#696161] font-light text-2xl">
                      Last Entry
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-0 lg:px-10">
                <p className="text-[#514F4F] font-normal sans mr-[10%]">
                  Tickets purchased online:
                </p>
                <span className="text-[#454242] font-bold sans">
                  Starts from ₦5,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20" id="tabs" ref={refs.locationRef}>
        <div className="container mx-auto">
          <TabsDemo />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h4 className="font-bold text-[#FA0303] text-sm">Our Centre</h4>
          <h6 className="text-[#1B2336] font-semibold text-3xl lg:text-[42px]">
            Know Before You Go
          </h6>
          <div className="flex justify-center mt-4">
            <p className="font-extralight sans text-[#1B2336] text-base lg:w-3/5">
              The safety and security of the visitors, volunteers, staff, and
              groups is of the highest importance. As a first of it’s kind
              museum gallery, we work hard every day to ensure the preservation
              of the nations treasures for the enjoyment of generations to come.
            </p>
          </div>
        </div>
        <div className="my-20">
          <Accordion
            classNames={{
              trigger: "mb-5 border-b",
              wrapper: "px-5",
            }}
            items={[
              {
                title: (
                  <button className="text-3xl text-[#363636] font-semibold border-b">
                    Entry and Guidelines
                  </button>
                ),
                content: <div>Hello wrld...</div>,
                value: "#232323",
              },
            ]}
            type="single"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
