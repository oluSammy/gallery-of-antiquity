"use client";

import ActiveDialog from "@/components/ActiveDialog/ActiveDialog";
import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import TabComponent from "@/components/TabComponent/TabComponent";
import PaginatedItems from "@/components/pagination";
import Table from "@/components/table/Table";
import { constants, dateTimeFormat } from "@/constants/constants";
import AdminPageLayout from "@/containers/AdminPageLayout";
import useApiClient from "@/hooks/useApiClient";
import { truncateText } from "@/utils/truncateText";
import { format } from "date-fns";
import React, { useMemo, useState } from "react";
import { GoSearch } from "react-icons/go";
import { LuTrendingUp } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useQuery } from "react-query";
import { Column } from "react-table";
import { useDebounce } from "usehooks-ts";

const options = ["today", "1 Month", "1 Year"];

const Page = () => {
  const [option, setOption] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [blackListedSearchQuery, setBlacklistedSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);
  const [tab, setTab] = useState("users");
  const [page, setPage] = useState(1);
  const [blacklistedPage, setBlacklistedPagePage] = useState(1);
  const limit = 4;

  const apiClient = useApiClient();

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    ["get-users", limit, page, debouncedValue],
    async () => {
      let urlString = `${constants.USERS()}?search=${[
        debouncedValue,
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
      ]}&page=${page}&limit=${limit}`;

      const response = await apiClient.get(urlString);
      return response.data;
    }
  );

  console.log({
    debouncedValue,
    tab,
  });

  const { data: blacklistedUsers, isLoading: isLoadingBlacklistedUsers } =
    useQuery<any, Error>(
      ["get-blacklisted-users", limit, blacklistedPage, debouncedValue],
      async () => {
        let urlString = `${constants.USERS()}?search=${[
          "firstName",
          debouncedValue,
        ]}&page=${blacklistedPage}&limit=${limit}&blacklisted=true`;

        const response = await apiClient.get(urlString);
        return response.data;
      }
    );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Name",
        accessor: "productName",
        Cell: (cell) => {
          const user = cell.row.original;
          return (
            <div className="flex items-center">
              <p> {truncateText(`${user.firstName} ${user.lastName}`, 15)}</p>
            </div>
          );
        },
      },
      {
        Header: "email",
        accessor: "email",
      },
      {
        Header: "phone number",
        accessor: "phoneNumber",
      },
      {
        Header: "Date Registered",
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
          const url = constants.USERS(cell.row.original._id);
          return (
            <ActiveDialog
              name={cell.row.original.categoryName}
              updateUrl={url}
              type={cell.row.original.active ? "disable" : "enable"}
              enableTitle="This user will be no longer be blacklisted."
              disableTitle="This user will be blacklisted."
              title="User"
            />
          );
        },
      },
    ],
    []
  );

  return (
    <AdminPageLayout pageTitle="Users">
      <div className="mt-4">
        <ChartDropdown
          options={options}
          selectedOption={option}
          setSelectedOption={setOption}
        />
      </div>
      <div className="mt-8 flex lg:flex-row flex-col lg:items-center">
        <DashboardCard
          title="Visitors"
          change={
            <div className="flex items-center text-black">
              <p>10%</p>
              <LuTrendingUp className="ml-2" />{" "}
            </div>
          }
          color="#E3F5FF"
          icon={
            <MdProductionQuantityLimits className="text-[#A5A5A5] -mt-5 " />
          }
          data={"199"}
        />
        <DashboardCard
          title="Visits"
          change={
            <div className="flex items-center text-black">
              <p>34%</p>
              <LuTrendingUp className="ml-2" />{" "}
            </div>
          }
          color="#E3F5FF"
          icon={
            <MdProductionQuantityLimits className="text-[#A5A5A5] -mt-5 " />
          }
          data={"3299"}
        />
      </div>
      <div className=" ml-auto mt-8 mr-8 ">
        <div className="relative">
          <GoSearch className="absolute top-1/2 -translate-y-1/2 left-5" />
          <input
            placeholder="search by name, email or phone number"
            className="bg-[#F5F4F4] w-full px-8 py-2 rounded-md ml-3 "
            type="search by product name"
            onChange={(e) =>
              tab === "users"
                ? setSearchQuery(e.target.value)
                : setBlacklistedSearchQuery(e.target.value)
            }
            value={tab === "users" ? searchQuery : blackListedSearchQuery}
          />
        </div>
      </div>

      <div className="mt-8">
        <TabComponent
          contents={[
            {
              content: (
                <>
                  <Table
                    columns={columns}
                    data={data ? data.users : []}
                    loading={isLoading}
                  />
                  <div className="pb-20">
                    <PaginatedItems
                      PageNumber={page}
                      TotalCount={data ? data.total : 0}
                      currentTotal={data ? data.currentTotal : 0}
                      itemsPerPage={limit}
                      setCurrentPage={(num) => {
                        setPage(num);
                      }}
                      setItemsPerPage={() => {}}
                      showEntries
                      isLoading={isLoading || isFetching}
                    />
                  </div>
                </>
              ),
              triggerId: "tab1",
              triggerTitle: "Users",
              onClick: () => setTab("users"),
            },
            {
              content: (
                <>
                  <Table
                    columns={columns}
                    data={blacklistedUsers ? blacklistedUsers.users : []}
                    loading={isLoading}
                  />
                  <div className="pb-20">
                    {blacklistedUsers && blacklistedUsers.total > limit && (
                      <PaginatedItems
                        PageNumber={blacklistedUsers}
                        TotalCount={
                          blacklistedUsers ? blacklistedUsers.total : 0
                        }
                        currentTotal={
                          blacklistedUsers ? blacklistedUsers.currentTotal : 0
                        }
                        itemsPerPage={limit}
                        setCurrentPage={(num) => {
                          setBlacklistedPagePage(num);
                        }}
                        setItemsPerPage={() => {}}
                        showEntries
                        isLoading={isLoading}
                      />
                    )}
                  </div>
                </>
              ),
              triggerId: "tab2",
              triggerTitle: "Blacklisted Users",
              onClick: () => setTab("blacklisted-users"),
            },
          ]}
        />
      </div>
    </AdminPageLayout>
  );
};

export default Page;
