import ChartDropdown from "../ChartDropdown/ChartDropdown";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

const data = [
  {
    name: "Monday",
    visits: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    visits: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    visits: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    visits: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    visits: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    visits: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    visits: 4300,
    amt: 2100,
  },
];

const CustomLineChart = (props: Props) => {
  return (
    <div className="bg-[#F7F9FB] p-4 ">
      <div className="flex items-center justify-between mb-8">
        <p className="font-bold text-black" > {props.title} </p>
        <ChartDropdown
          options={props.options}
          selectedOption={props.selectedOption}
          setSelectedOption={props.setSelectedOption}
        />
      </div>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="red"
            strokeWidth={2}
            dot={false}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
