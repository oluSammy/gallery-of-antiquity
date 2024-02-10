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
import useApiClient from "@/hooks/useApiClient";
import { constants, dateTimeFormat } from "@/constants/constants";
import { format } from "date-fns";
import Switch from "@/components/Switch/Switch";
import { IoIosArrowForward } from "react-icons/io";
import useGetTopCategories from "@/hooks/useGetTopCategories";
import DialogComponent from "@/components/Modal/Modal";
import ActiveDialog from "@/components/ActiveDialog/ActiveDialog";

const Page = () => {
  const apiClient = useApiClient();
  // productFeatId
  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Name",
        accessor: "categoryName",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        Cell: (cell) => {
          return format(
            new Date(cell.row.original.createdAt),
            dateTimeFormat.date
          );
        },
      },
      {
        Header: "Top Category",
        accessor: "productFeatId",
        Cell: (cell) => {
          return <p>{cell.row.original.productFeatId.productType}</p>;
        },
      },
      {
        Header: "Action",
        Cell: (cell) => {
          const url = constants.CATEGORY(cell.row.original._id);
          return (
            <ActiveDialog
              name={cell.row.original.categoryName}
              updateUrl={url}
              type={cell.row.original.active ? "disable" : "enable"}
            />
          );
        },
      },
      {
        Header: "Edit",
        Cell: (cell) => {
          return (
            <Link
              href={`/admin/categories/edit/${cell.row.original._id}`}
              className={`flex items-center justify-center rounded-full text-[#737373]  hover:bg-[#f7f7f7] h-7 w-7 font-bold border-[#8B83BA] border-2 cursor-pointer`}
            >
              <IoIosArrowForward className="text-[#8B83BA]" />
            </Link>
          );
        },
      },
    ],
    []
  );

  const { data, isLoading } = useQuery<any, Error>(
    ["get-all-categories"],
    async () => {
      const response = await apiClient.get(constants.CATEGORY());
      return response.data;
    }
  );

  return (
    <AdminPageLayout pageTitle="Categories" pageLabel="Categories">
      <div className="my-8 flex items-center justify-end pr-8">
        <Link
          href="/admin/categories/new"
          className="flex items-center bg-[#FA0303] text-white w-fit px-4 py-3 rounded-lg mr-4 "
        >
          <IoIosAdd className="border rounded-md mr-1" />
          <span className="ml-1 ">Add Category</span>
        </Link>
        {/* <FilterDropdown
          options={filterOptions}
          selectedOptions={selectedFilterOptions}
          setSelectedOptions={setSelectedFilterOptions}
        /> */}
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

      <Table
        columns={columns}
        data={data ? data.category ?? [] : []}
        loading={isLoading}
      />
    </AdminPageLayout>
  );
};

export default Page;
