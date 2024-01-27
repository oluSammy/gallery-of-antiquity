"use client";

import PrimaryButton from "@/components/Button/PrimaryButton";
import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import TabComponent from "@/components/TabComponent/TabComponent";
import AdminPageLayout from "@/containers/AdminPageLayout";
import Link from "next/link";
import React, { useState } from "react";
import { LuTrendingUp } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import FilterDropdown from "@/components/Dropdown/FilterDropdown";
import { GoSearch } from "react-icons/go";

const Page = () => {
  const [option, setOption] = useState("today");
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([""]);

  const filterOptions = ["T Shirt", "Art", "Pictures", "Caps", "puzzles"];

  const options = ["today", "1 Month", "1 Year"];
  return (
    <AdminPageLayout pageTitle="Products">
      <div className="py-4">
        <div>
          <ChartDropdown
            options={options}
            selectedOption={option}
            setSelectedOption={setOption}
          />
        </div>
        <div className="mt-8 flex lg:flex-row flex-col lg:items-center">
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
            data="199"
          />
        </div>

        <div className="mt-8 flex items-center justify-end pr-8">
          <Link
            href="/"
            className="flex items-center bg-[#FA0303] text-white w-fit px-4 py-3 rounded-lg mr-4 "
          >
            <IoIosAdd className="border rounded-md mr-1" />
            <span className="ml-1 ">Add Product</span>
          </Link>
          <FilterDropdown
            options={filterOptions}
            selectedOptions={selectedFilterOptions}
            setSelectedOptions={setSelectedFilterOptions}
          />
          <div className="lg:w-64">
            <div className="relative">
              <GoSearch className="absolute top-1/2 -translate-y-1/2 left-5" />
              <input
                placeholder="search"
                className="bg-[#F5F4F4] w-full px-8 py-2 rounded-md ml-3 "
                type="search"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <TabComponent
            contents={[
              {
                content: <div>Products</div>,
                triggerId: "tab1",
                triggerTitle: "Products",
              },
              {
                content: <div>Out Of Stock</div>,
                triggerId: "tab2",
                triggerTitle: "Out Of Stock!",
              },
            ]}
          />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
