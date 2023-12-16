"use client";

import PageLayout from "@/containers/PageLayout";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "@/components/CustomInput/CustomInput";
import {
  eachDayOfInterval,
  endOfMonth,
  isSunday,
  startOfMonth,
} from "date-fns";
import SelectTicket from "@/components/SelectTicket/SelectTicket";
import { formatNumber } from "@/utils/formatnumber";
import { getDate, getDay, getMonth, getYear, getTime } from "date-fns";
import { useSearchParams } from "next/navigation";

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

const ticketTimes = ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"];

const ticketPrices = [
  {
    name: "Seniors",
    price: 15000,
    alias: "70 and over",
  },
  {
    name: "Adults",
    price: 12000,
  },
  {
    name: "Students",
    price: 5000,
  },
  {
    name: "Children",
    price: 2000,
    alias: "under 13",
  },
];

const facilityAccess = [
  {
    name: "Add virtual reality access",
    price: 2000,
  },
  {
    name: "Get Library Access Slot",
    price: 0,
  },
];

const ticketInfo = {
  general: ticketPrices,
  seniors: [ticketPrices[0]],
  adults: [ticketPrices[1]],
  students: [ticketPrices[2]],
  children: [ticketPrices[3]],
};

const Page = () => {
  const [step, setStep] = useState(1); // [1, 2, 3]
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const params = useSearchParams();

  // Get the query parameter from the URL
  // const { type, number } = params as any;

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const initialValues: Record<string, { value: number; price: number }> = {};
  const facilityValues: Record<string, { value: number; price: number }> = {};
  const type = params.get("type");
  const number = params.get("number");
  const defaultPrice = params.get("price");
  const isDefault = params.get("isDefault");

  const prices = ticketInfo[type as keyof typeof ticketInfo] || ticketPrices;

  [...prices, ...facilityAccess].forEach((ticket) => {
    initialValues[ticket.name] = { value: 0, price: ticket.price };
  });

  [...facilityAccess].forEach((ticket) => {
    facilityValues[ticket.name] = { value: 0, price: ticket.price };
  });

  const [values, setValues] =
    useState<Record<string, { value: number; price: number }>>(initialValues);

  const daysOfTheMonth = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfMonth(startDate),
        end: endOfMonth(startDate),
      }),
    [startDate]
  );

  console.log(values, " values values");

  const offset = isSunday(daysOfTheMonth[0]) ? 0 : daysOfTheMonth[0].getDay();
  const selectDate = (date: Date) => {
    // validate date availability

    // set selected date
    setSelectedDate(date);
  };

  const total = Object.values(values).reduce((prev, curr) => {
    return prev + curr.value * curr.price;
  }, 0);

  const totalValue =
    isDefault === "true" ? total + parseInt(defaultPrice || "0") : total;

  return (
    <PageLayout>
      <div className="container mx-auto py-20">
        <div className="flex items-center flex-wrap">
          <Link
            href="/visit"
            className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 rounded-sm`}
          >
            <span className=" mr-2 md:mr-5">Plan Your Visit</span>
            <IoIosArrowForward />
          </Link>
          <button
            className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm ${
              step === 1 || step === 2 ? "font-semibold" : ""
            } `}
            onClick={() => {
              setStep(1);
              setSelectedDate(null);
            }}
          >
            <span className="mr-5">Book Tickets</span>
            <IoIosArrowForward />
          </button>
          <div
            className={`flex items-center cursor-pointer mr-8 hover:bg-[#f7f7f7] px-2 py-1 rounded-sm ${
              step === 3 ? "font-semibold" : ""
            } `}
          >
            <span className="mr-5">Booking Summary</span>
            <IoIosArrowForward />
          </div>
        </div>
        {step === 1 && (
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
                {daysOfTheMonth.map((day, idx) => {
                  const currentDate = new Date(Date.now()).getDate();
                  const isPastDate = day.getDate() <= currentDate;

                  return (
                    <button
                      key={idx}
                      className={`col-span-1 flex justify-center mb-8 ${
                        isPastDate
                          ? "cursor-not-allowed opacity-30"
                          : "cursor-pointer"
                      }`}
                      onClick={() => {
                        if (isPastDate) return;
                        selectDate(day);
                        setStep(2);
                      }}
                    >
                      <p className="bg-[#F5F3EE] border border-[#C6C2B9] flex items-center justify-center h-8 w-10  md:h-16 md:w-24 lg:h-20 lg:w-36 ">
                        {day.getDate()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {step === 2 && selectedDate && (
          <SelectTimeAndTicket
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setStep={setStep}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            values={values}
            setValues={setValues}
            totalValue={totalValue}
            type={type || "general"}
            isDefault={isDefault === "true"}
            defaultPrice={parseInt(defaultPrice || "0")}
            defaultNumberOfTickets={parseInt(number || "0")}
          />
        )}
        {/* {step === 3 && (
          <BookingSummary
            selectedDate={selectedDate}
            setStep={setStep}
            selectedTime={selectedTime}
            selectedValues={values}
            totalValue={totalValue}
          />
        )} */}
      </div>
    </PageLayout>
  );
};

const SelectTimeAndTicket = ({
  selectedDate,
  setSelectedDate,
  setStep,
  selectedTime,
  setSelectedTime,
  values,
  setValues,
  totalValue,
  type,
  isDefault,
  defaultPrice,
  defaultNumberOfTickets,
}: {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: string | null;
  setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
  values: Record<string, { value: number; price: number }>;
  setValues: React.Dispatch<
    React.SetStateAction<Record<string, { value: number; price: number }>>
  >;
  totalValue: number;
  type: string;
  isDefault?: boolean;
  defaultPrice: number;
  defaultNumberOfTickets?: number;
}) => {
  const prices = ticketInfo[type as keyof typeof ticketInfo] || ticketPrices;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-8">
      <div className="border-b mb-8">
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
            className="cursor-pointer bg-[#333333] px-5 py-3 rounded-md text-white ml-3 "
            onClick={() => {
              setSelectedDate(null);
              setStep(1);
            }}
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
              onClick={() => {
                setSelectedTime(`${time} ${timePeriod}`);
              }}
              className={`hover:bg-[#FA0303] cursor-pointer mb-2 mr-3 text-white items-center text-2xl hover:font-extrabold px-4 py-6 rounded-full flex-inline flex-col ${
                selectedTime === `${time} ${timePeriod}`
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
      <div className="my-2">
        {prices.map((ticket) => {
          return (
            <SelectTicket
              key={ticket.name}
              price={ticket.price}
              alias={ticket.alias}
              value={
                defaultNumberOfTickets
                  ? defaultNumberOfTickets
                  : values[ticket.name].value
              }
              setValue={(value) => {
                setValues((prev) => ({
                  ...prev,
                  [ticket.name]: { ...prev[ticket.name], value },
                }));
              }}
              name={ticket.name}
              active={!isDefault}
            />
          );
        })}
      </div>
      <div className="my-20 ">
        {facilityAccess.map((ticket) => {
          return (
            <SelectTicket
              key={ticket.name}
              price={ticket.price}
              value={values[ticket.name].value}
              setValue={(value) => {
                setValues((prev) => ({
                  ...prev,
                  [ticket.name]: { ...prev[ticket.name], value },
                }));
              }}
              name={ticket.name}
              active={true}
            />
          );
        })}
      </div>

      <div className="bg-[#B9B9B9] lg:w-4/12 flex items-center py-1 px-1 rounded-full">
        <input
          className="bg-transparent flex-1 h-full px-4 text-2xl font-normal outline-none"
          placeholder="Coupon"
        />
        <button className="bg-[#838488] text-white py-4 rounded-full px-8 cursor-pointer font-semibold ml-2">
          Apply
        </button>
      </div>

      <div className="flex items-center justify-between mt-20">
        <p className="text-[#565252] font-normal text-3xl">Total Amount</p>
        <p className="text-black font-bold text-3xl">
          &#x20A6; {formatNumber(totalValue)}{" "}
        </p>
      </div>
      <div className="mt-10">
        <button
          onClick={() => setStep(1)}
          className="text-white rounded-md px-10 bg-[#222223] hover:bg-black font-bold text-sm  py-4 cursor-pointer mr-10"
        >
          Cancel Ticket
        </button>
        <button
          onClick={() => totalValue > 0 && selectedTime && setStep(3)}
          className={`text-white rounded-md px-10 hover:bg-[#fa0303ce] font-bold text-sm  py-4 cursor-pointer ${
            totalValue > 0 && selectedTime
              ? "bg-[#FA0303] cursor-pointer"
              : "bg-[#fa0303ce] cursor-not-allowed"
          } `}
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
};

const BookingSummary = ({
  selectedDate,
  setStep,
  selectedTime,
  selectedValues,
  totalValue,
}: {
  selectedDate: Date | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: string | null;
  selectedValues: Record<string, { value: number; price: number }>;
  totalValue: number;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const time = selectedTime ? selectedTime.split(" ") : ["", ""];
  const valuesSelected = Object.entries(selectedValues).filter(
    (val) => val[1].value > 0
  );

  return (
    <div className="py-10">
      <div className="pb-4 border-b mb-4">
        <button
          className="cursor-pointer bg-[#333333] px-5 py-3 rounded-md text-white ml-3 "
          onClick={() => {
            setStep(1);
          }}
        >
          Change Date And Time
        </button>
      </div>
      <div className="flex items-baseline">
        <button
          className={`hover:bg-[#FA0303] flex flex-col cursor-pointer mb-2 mr-3 text-white items-center text-2xl hover:font-extrabold px-4 py-6 rounded-full bg-[#FA0303] font-extrabold  `}
        >
          <p>{time[0]}</p>
          <p>{time[1]}</p>
        </button>
        <div>
          <p className="text-[#4D4E50] font-medium text-3xl">
            {days[getDay(selectedDate!)]},
          </p>
          <p className="text-[#4D4E50] font-medium text-3xl">
            {months[getMonth(selectedDate!)]},{getDate(selectedDate!)},{" "}
            {getYear(selectedDate!)}
          </p>
        </div>
      </div>
      <div>
        {valuesSelected.map((val, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-between my-6 pb-3 border-b"
            >
              <div className="flex items-center">
                <p className="text-[#4D4E50] font-medium text-3xl mr-8">
                  {val[0]}
                </p>
                {val[1].value > 1 && (
                  <p className="text-2xl font-medium">X {val[1].value}</p>
                )}
              </div>
              <p className="text-[#1D1E1D] font-medium text-2xl">
                &#x20A6; {formatNumber(val[1].price)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mt-20">
        <p className="text-[#565252] font-normal text-3xl">Total Amount</p>
        <p className="text-black font-bold text-3xl">
          &#x20A6; {formatNumber(totalValue)}{" "}
        </p>
      </div>
      <div className="mt-10">
        <button
          onClick={() => setStep(1)}
          className="text-white rounded-md px-10 bg-[#222223] hover:bg-black font-bold text-sm  py-4 cursor-pointer mr-10"
        >
          Cancel Ticket
        </button>
        <button
          className={`text-white rounded-md px-10 hover:bg-[#fa0303ce] font-bold text-sm  py-4 bg-[#FA0303] cursor-pointer`}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Page;
