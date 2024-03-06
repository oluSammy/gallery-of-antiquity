"use client";

import AdminPageLayout from "@/containers/AdminPageLayout";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { Column } from "react-table";
import Table from "@/components/table/Table";
import { constants, dateTimeFormat } from "@/constants/constants";
import { format } from "date-fns";
import Switch from "@/components/Switch/Switch";
import { IoIosArrowForward } from "react-icons/io";
import useGetTopCategories from "@/hooks/useGetTopCategories";
import ActiveDialog from "@/components/ActiveDialog/ActiveDialog";
import { useDebounce } from "usehooks-ts";
import PaginatedItems from "@/components/pagination";

const filterOptions = ["T Shirt", "Art", "Pictures", "Caps", "puzzles"];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);
  const [page, setPage] = useState(1);

  const limit = 10;

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Name",
        accessor: "productType",
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
        Header: "Action",
        Cell: (cell) => {
          const url = constants.TOP_CATEGORY(cell.row.original._id);

          return (
            <ActiveDialog
              name={cell.row.original.productType}
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
              href={`/admin/top-categories/edit/${cell.row.original._id}`}
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

  const { data, isLoading, isFetching } = useGetTopCategories(
    page,
    limit,
    "productType",
    debouncedValue
  );

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
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
        </div>
      </div>

      <Table
        columns={columns}
        data={data ? data?.products?.products ?? [] : []}
        loading={isLoading}
      />

      <PaginatedItems
        PageNumber={page}
        TotalCount={data ? data?.products?.totalCount : 0}
        currentTotal={data ? data?.products?.currentTotal : 0}
        itemsPerPage={limit}
        setCurrentPage={(num) => {
          setPage(num);
        }}
        setItemsPerPage={() => {}}
        showEntries
        isLoading={isLoading || isFetching}
      />
    </AdminPageLayout>
  );
};

export default Page;
