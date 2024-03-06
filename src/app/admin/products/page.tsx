"use client";

import PrimaryButton from "@/components/Button/PrimaryButton";
import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import TabComponent from "@/components/TabComponent/TabComponent";
import AdminPageLayout from "@/containers/AdminPageLayout";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { LuTrendingUp } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import FilterDropdown from "@/components/Dropdown/FilterDropdown";
import { GoSearch } from "react-icons/go";
import Table from "@/components/table/Table";
import { Column } from "react-table";
import axios from "axios";
import { useQuery } from "react-query";
import useApiClient from "@/hooks/useApiClient";

const sampleData = [
  {
    name: "T Shirts",
    type: "Clothing",
    stock: 23,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: "S,M,L,XL",
  },
  {
    name: "T Shirts",
    type: "Clothing",
    stock: 23,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: "S,M,L,XL",
  },
  {
    name: "T Shirts",
    type: "Clothing",
    stock: 23,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: "S,M,L,XL",
  },
];

const Page = () => {
  const [option, setOption] = useState("today");
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([""]);

  const filterOptions = ["T Shirt", "Art", "Pictures", "Caps", "puzzles"];

  const options = ["today", "1 Month", "1 Year"];

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Sizes",
        accessor: "sizes",
      },
    ],
    []
  );
  // const [data, setData] = useState([]);

  // const apiClient = useApiClient();

  const { data, isLoading } = useQuery<any, Error>(["blog-list"], async () => {
    const response = await axios("https://api.tvmaze.com/search/shows?q=snow");
    // await apiClient.get(
    //   "https://api.tvmaze.com/search/shows?q=snow"
    // );

    return response.data;
  });

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
            href="/admin/products/new"
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
                content: (
                  <Table
                    columns={columns}
                    data={data ? data : []}
                    loading={isLoading}
                  />
                ),
                triggerId: "tab1",
                triggerTitle: "Products",
              },
              {
                content: (
                  <Table
                    columns={columns}
                    data={data ? data : []}
                    loading={isLoading}
                  />
                ),
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
