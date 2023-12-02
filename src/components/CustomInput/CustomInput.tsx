"use client";

import { forwardRef, ForwardedRef, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  value?: string;
  onClick?: () => void;
}

const DateInput = ({
  startDate,
  setStartDate,
}: {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
}) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date || new Date(Date.now()))}
      customInput={<ExampleCustomInput />}
      dateFormat="MMMM yyyy"
      showMonthYearPicker
    />
  );
};

// eslint-disable-next-line react/display-name
const ExampleCustomInput = forwardRef(
  ({ value, onClick }: Props, ref: ForwardedRef<any>) => (
    <button
      className="px-4 flex rounded-md justify-center py-2 items-center sans mt-6 cursor-pointer"
      onClick={onClick}
      ref={ref}
      style={{ border: "1px solid black" }}
    >
      <CiCalendar className="font-bold" color="#ABADC6   " />
      <span className="ml-3 mr-4">{value}</span>
      <RiArrowDropDownLine className="text-xl" size="20px" />
    </button>
  )
);

export default DateInput;
