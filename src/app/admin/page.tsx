"use client";

import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import LineChart from "@/components/charts/LineChart";
import Sample from "@/components/charts/Sample";
import AdminPageLayout from "@/containers/AdminPageLayout";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTrendingUp } from "react-icons/lu";
import { BsTicketDetailed } from "react-icons/bs";
import { PiTrendUpThin } from "react-icons/pi";
import { MdProductionQuantityLimits } from "react-icons/md";

const Page = () => {
  const [option, setOption] = useState("today");
  const [chartOption, setChartOption] = useState("today");

  const options = ["today", "1 Month", "1 Year"];

  return (
    <AdminPageLayout pageTitle="Dashboard">
      <div className="py-4">
        <div>
          <ChartDropdown
            options={options}
            selectedOption={option}
            setSelectedOption={setOption}
          />
        </div>
        <div>
          <div className="mt-8 flex lg:flex-row flex-col lg:items-center">
            <DashboardCard
              title="Visits"
              change={
                <div className="flex items-center text-black">
                  <p>+91.5%</p>
                  <LuTrendingUp className="ml-2" />{" "}
                </div>
              }
              color="#E3F5FF"
              icon={<FaRegUserCircle className="text-[#A5A5A5] -mt-5 " />}
              data="1,200"
            />
            <DashboardCard
              title="Tickets"
              change={
                <div className="flex items-center text-black">
                  <p>+91.5%</p>
                  <LuTrendingUp className="ml-2" />{" "}
                </div>
              }
              color="#E5ECF6"
              icon={<BsTicketDetailed className="text-[#A5A5A5] -mt-5 " />}
              data="1,200"
            />
            <DashboardCard
              title="Income"
              change={
                <div className="flex items-center text-black">
                  <p>+91.5%</p>
                  <LuTrendingUp className="ml-2" />{" "}
                </div>
              }
              color="#E5ECF6"
              icon={<PiTrendUpThin className="text-[#A5A5A5] -mt-5 " />}
              data="2000"
            />
            <DashboardCard
              title="Products"
              change={
                <div className="flex items-center text-black">
                  <p>+91.5%</p>
                  <LuTrendingUp className="ml-2" />{" "}
                </div>
              }
              color="#E3F5FF"
              icon={
                <MdProductionQuantityLimits className="text-[#A5A5A5] -mt-5 " />
              }
              data="1,200"
            />
          </div>
        </div>

        <div className="mt-8 pr-8 ">
          <LineChart
            options={options}
            selectedOption={chartOption}
            setSelectedOption={setChartOption}
            title="Visits"
          />
        </div>

        <div className="mt-8 pr-8 ">
          <LineChart
            options={options}
            selectedOption={chartOption}
            setSelectedOption={setChartOption}
            title="Income"
          />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
