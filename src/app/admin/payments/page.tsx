"use client";

import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import TabComponent from "@/components/TabComponent/TabComponent";
import PaginatedItems from "@/components/pagination";
import Table from "@/components/table/Table";
import AdminPageLayout from "@/containers/AdminPageLayout";
import { truncateText } from "@/utils/truncateText";
import React, { useMemo, useState } from "react";
import { BsTicket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Column } from "react-table";

const options = ["today", "1 Month", "1 Year"];
const limit = 10;

const Page = () => {
  const [option, setOption] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [tab, setTab] = useState("Transactions");
  const [page, setPage] = useState(1);

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "TransactionType",
        accessor: "type", // productPic
        Cell: (cell) => {
          const product = cell.row.original;
          return (
            <div className="flex items-center">
              <p> {truncateText("Adult", 15)}</p>
            </div>
          );
        },
      },
      {
        Header: "Method",
        accessor: "method",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Reference Id",
        accessor: "id",
      },
      {
        Header: "Email.",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <AdminPageLayout pageTitle="Payments">
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
            title="Ticket Income"
            change={
              <div className="flex items-center text-black">
                <p>10%</p>
              </div>
            }
            color="#E3F5FF"
            icon={<BsTicket className="text-[#A5A5A5] -mt-5 " />}
            data={"1020"}
          />
          <DashboardCard
            title="Product Income"
            change={
              <div className="flex items-center text-black">
                <p>10%</p>
              </div>
            }
            color="#E5ECF6"
            icon={
              <MdProductionQuantityLimits className="text-[#A5A5A5] -mt-5 " />
            }
            data={"1000"}
          />
        </div>
        <div className="mt-8 flex items-center justify-end pr-8">
          <div className="border border-[#878994] rounded-md px-3 cursor-pointer py-2 text-[#878994] text-base font-medium flex items-center">
            <p className="ml-2">Download</p>
          </div>
          <div className="lg:w-64">
            <div className="relative">
              <GoSearch className="absolute top-1/2 -translate-y-1/2 left-5" />
              <input
                placeholder="search"
                className="bg-[#F5F4F4] w-full px-8 py-2 rounded-md ml-3 "
                type="search by product name"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <TabComponent
            contents={[
              {
                content: (
                  <>
                    <Table columns={columns} data={[]} loading={false} />
                    <div className="pb-20">
                      <PaginatedItems
                        PageNumber={page}
                        TotalCount={0}
                        currentTotal={0}
                        itemsPerPage={limit}
                        setCurrentPage={(num) => {
                          setPage(num);
                        }}
                        setItemsPerPage={() => {}}
                        showEntries
                        isLoading={false}
                      />
                    </div>
                  </>
                ),
                triggerId: "tab1",
                triggerTitle: "Transactions",
                onClick: () => setTab("Transactions"),
              },
            ]}
          />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
