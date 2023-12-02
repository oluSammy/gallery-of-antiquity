"use client";

import PageLayout from "@/containers/PageLayout";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "@/components/CustomInput/CustomInput";
import {
  eachDayOfInterval,
  endOfMonth,
  isSunday,
  startOfMonth,
} from "date-fns";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Page = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysOfTheMonth = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfMonth(startDate),
        end: endOfMonth(startDate),
      }),
    [startDate]
  );

  const offset = isSunday(daysOfTheMonth[0]) ? 0 : daysOfTheMonth[0].getDay();

  const selectDate = (date: Date) => {
    // validate date availability

    // set selected date
    setSelectedDate(date);
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-20">
        <div className="flex items-center flex-wrap">
          <Link
            href="/visit"
            className="flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 rounded-sm"
          >
            <span className=" mr-2 md:mr-5">Plan Your Visit</span>
            <IoIosArrowForward />
          </Link>
          <Link
            href="/book-ticket"
            className="flex items-center hover:bg-[#f7f7f7] px-2 py-1 font-semibold rounded-sm"
          >
            <span className="mr-5">Book Tickets</span>
            <IoIosArrowForward />
          </Link>
        </div>
        {selectedDate ? (
          <SelectTimeAndTicket
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ) : (
          <div>
            <div className="lg:ml-0 ml-2 ">
              <DateInput startDate={startDate} setStartDate={setStartDate} />
            </div>

            <div>
              <div className="flex justify-center mt-4 lg:mt-0 ">
                <p className="text-center text-[#888181] font-medium text-2xl flex items-center sans ">
                  <span>{months[startDate.getMonth()]}</span>
                  <span className="ml-2">{startDate.getFullYear()}</span>
                </p>
              </div>
              <div className="grid grid-cols-7 items-center sans text-[#F50617] font-semibold text-[8px] md:text-base lg:text-xl mt-10">
                {days.map((day) => (
                  <div key={day} className="flex justify-center">
                    <p className="text-center h-[25px] items-center">{day}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 items-center sans font-semibold text-[8px] md:text-xl lg:text-2xl mt-4 md:mt-10">
                {Array.from({ length: offset }, (_, index) => index).map(
                  (_, idx) => (
                    <p key={idx}>&nbsp;</p>
                  )
                )}
                {daysOfTheMonth.map((day, idx) => (
                  <button
                    key={idx}
                    className="col-span-1 flex justify-center mb-8 cursor-pointer"
                    onClick={() => selectDate(day)}
                  >
                    <p className="bg-[#F5F3EE] border border-[#C6C2B9] flex items-center justify-center h-8 w-10  md:h-16 md:w-24 lg:h-20 lg:w-36 ">
                      {day.getDate()}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

const ticketTimes = ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"];

const SelectTimeAndTicket = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="mt-8">
      <div className="border-b">
        <div className="flex flex-wrap items-center justify-between pb-5">
          <p className="text-[#4D4E50] font-medium mx-2 md:text-[30px]">
            {selectedDate.toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <button
            className="cursor-pointer bg-[#333333] px-5 py-3 rounded-sm text-white ml-3 "
            onClick={() => setSelectedDate(null)}
          >
            Change Date
          </button>
        </div>
      </div>
      <div className="flex items-center flex-wrap mt-8 px-2 ">
        {ticketTimes.map((time) => {
          const [time_, timePeriod] = time.split(" ");
          return (
            <button
              onClick={() => setSelectedTime(time)}
              className={`hover:bg-[#FA0303] cursor-pointer mb-2 mr-3 text-white items-center text-2xl hover:font-extrabold px-3 py-4 rounded-3xl flex-inline flex-col ${
                selectedTime === time
                  ? " bg-[#FA0303] font-extrabold "
                  : " bg-[#838488] font-medium "
              } `}
              key={time}
            >
              <p className="text-center">{time_}</p>
              <p className="text-center">{timePeriod}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
