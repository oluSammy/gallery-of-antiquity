"use client";

import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import AdminPageLayout from "@/containers/AdminPageLayout";
import React, { useMemo, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsTicket } from "react-icons/bs";
import FilterDropdown from "@/components/Dropdown/FilterDropdown";
import { GoSearch } from "react-icons/go";
import { Column } from "react-table";
import { truncateText } from "@/utils/truncateText";
import TabComponent from "@/components/TabComponent/TabComponent";
import Table from "@/components/table/Table";
import PaginatedItems from "@/components/pagination";

const Page = () => {
  const options = ["today", "1 Month", "1 Year"];
  const [option, setOption] = useState("today");
  const [selectedTicketType, setSelectedTicketType] = useState<string[]>([]);
  const [selectedTicketTime, setSelectedTicketTime] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [historySearchQuery, setHistorySearchQuery] = useState("");
  const selectedTicketTypeOptions = ["All"];
  const selectedTicketTimeOptions = ["All"];
  const [tab, setTab] = useState<"Tickets" | "History">("Tickets");
  const [page, setPage] = useState(1);
  const [historyPage, setHistoryPage] = useState(1);
  const limit = 10;

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Type",
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
        Header: "Ticket Number",
        accessor: "ticketNumber",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "Duration.",
        accessor: "duration",
      },
    ],
    []
  );

  return (
    <AdminPageLayout pageTitle="Tickets">
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
            title="Visits"
            change={
              <div className="flex items-center text-black">
                <p>10%</p>
                <FaRegUserCircle className="ml-2" />{" "}
              </div>
            }
            color="#E3F5FF"
            icon={
              <MdProductionQuantityLimits className="text-[#A5A5A5] -mt-5 " />
            }
            data={"1020"}
          />
          <DashboardCard
            title="Tickets"
            change={
              <div className="flex items-center text-black">
                <p>10%</p>
                <BsTicket className="ml-2" />{" "}
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
          <FilterDropdown
            prop={[
              {
                options: [],
                selectedOptions: selectedTicketTypeOptions,
                setSelectedOptions: setSelectedTicketType,
                title: "Ticket Type",
              },
              {
                options: [],
                selectedOptions: selectedTicketTimeOptions,
                setSelectedOptions: setSelectedTicketTime,
                title: "Time",
              },
            ]}
          />
          <div className="lg:w-64">
            <div className="relative">
              <GoSearch className="absolute top-1/2 -translate-y-1/2 left-5" />
              <input
                placeholder="search"
                className="bg-[#F5F4F4] w-full px-8 py-2 rounded-md ml-3 "
                type="search by product name"
                onChange={(e) =>
                  tab === "Tickets"
                    ? setSearchQuery(e.target.value)
                    : setHistorySearchQuery(e.target.value)
                }
                value={tab === "Tickets" ? searchQuery : historySearchQuery}
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
                triggerTitle: "Products",
                onClick: () => setTab("Tickets"),
              },
              {
                content: (
                  <>
                    <Table columns={columns} data={[]} loading={false} />
                    <div className="pb-20">
                      <PaginatedItems
                        PageNumber={historyPage}
                        TotalCount={0}
                        currentTotal={0}
                        itemsPerPage={limit}
                        setCurrentPage={(num) => {
                          setHistoryPage(num);
                        }}
                        setItemsPerPage={() => {}}
                        showEntries
                        isLoading={false}
                      />
                    </div>
                  </>
                ),
                triggerId: "tab2",
                triggerTitle: "Out Of Stock!",
                onClick: () => setTab("History"),
              },
            ]}
          />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
