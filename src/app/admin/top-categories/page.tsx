"use client";

import AdminPageLayout from "@/containers/AdminPageLayout";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import FilterDropdown from "@/components/Dropdown/FilterDropdown";
import { GoSearch } from "react-icons/go";
import { Column } from "react-table";
import { useQuery } from "react-query";
import axios from "axios";
import Table from "@/components/table/Table";

const filterOptions = ["T Shirt", "Art", "Pictures", "Caps", "puzzles"];

const Page = () => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([""]);

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

  const { data, isLoading } = useQuery<any, Error>(["blog-list"], async () => {
    const response = await axios("https://api.tvmaze.com/search/shows?q=snow");
    // await apiClient.get(
    //   "https://api.tvmaze.com/search/shows?q=snow"
    // );

    return response.data;
  });

  console.log(data);

  return (
    <AdminPageLayout pageTitle="Top Categories" pageLabel="Top Categories">
      <div className="my-8 flex items-center justify-end pr-8">
        <Link
          href="/admin/top-categories/new"
          className="flex items-center bg-[#FA0303] text-white w-fit px-4 py-3 rounded-lg mr-4 "
        >
          <IoIosAdd className="border rounded-md mr-1" />
          <span className="ml-1 ">Add Category</span>
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
      <Table columns={columns} data={data ? data : []} loading={isLoading} />
    </AdminPageLayout>
  );
};

export default Page;
