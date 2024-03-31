"use client";

import ChartDropdown from "@/components/ChartDropdown/ChartDropdown";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import TabComponent from "@/components/TabComponent/TabComponent";
import AdminPageLayout from "@/containers/AdminPageLayout";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { LuTrendingUp } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosAdd, IoIosArrowForward } from "react-icons/io";
import FilterDropdown from "@/components/Dropdown/FilterDropdown";
import { GoSearch } from "react-icons/go";
import Table from "@/components/table/Table";
import { Column } from "react-table";
import { useQuery } from "react-query";
import useApiClient from "@/hooks/useApiClient";
import { useDebounce } from "usehooks-ts";
import { constants } from "@/constants/constants";
import { truncateText } from "@/utils/truncateText";
import { formatNumber } from "@/utils/formatnumber";
import PaginatedItems from "@/components/pagination";
import Image from "next/image";
import ActiveDialog from "@/components/ActiveDialog/ActiveDialog";

const Page = () => {
  const [option, setOption] = useState("today");
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([""]);

  const [searchQuery, setSearchQuery] = useState("");
  const [outOfStockSearchQuery, setOutOfStockSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);
  const debouncedOutOfStockValue = useDebounce<string>(
    outOfStockSearchQuery,
    500
  );
  const [tab, setTab] = useState("Products");
  const [page, setPage] = useState(1);
  const [outOfStockPage, setOutOfStockPage] = useState(1);
  const limit = 10;

  const apiClient = useApiClient();
  const filterOptions = ["T Shirt", "Art", "Pictures", "Caps", "puzzles"];
  const options = ["today", "1 Month", "1 Year"];
  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: "Name",
        accessor: "productName", // productPic
        Cell: (cell) => {
          const product = cell.row.original;
          return (
            <div className="flex items-center">
              <figure className="w-8 h-8 mr-1">
                <Image
                  src={product.productPic}
                  height={20}
                  width={20}
                  alt={product.productName}
                  className="rounded-sm object-cover h-full w-full"
                />
              </figure>
              <p> {truncateText(product.productName, 15)}</p>
            </div>
          );
        },
      },
      {
        Header: "category",
        accessor: "productCategoryId.categoryName",
      },
      {
        Header: "Top Category",
        accessor: "productFeatId.productType",
      },
      {
        Header: "Price",
        accessor: "amount",
        Cell: (cell) => {
          return <> {formatNumber(cell.row.original.amount)} </>;
        },
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: (cell) => {
          return <> {truncateText(cell.row.original.description, 15)} </>;
        },
      },
      {
        Header: "Sizes",
        accessor: "sizes",
        Cell: (cell) => {
          return <> {cell.row.original.size.join(", ")} </>;
        },
      },
      {
        Header: "Qty.",
        accessor: "quantity",
        Cell: (cell) => {
          return <> {formatNumber(cell.row.original.quantity)} </>;
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
              enableTitle="This Product will become visible to the customers."
              disableTitle="This Products will no longer be visible to the customers."
              title="Product"
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

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    ["get-all-products", debouncedValue, page, limit],
    async () => {
      let urlString = `${constants.PRODUCTS()}?search=${[
        "productName",
        debouncedValue,
      ]}&page=${page}&limit=${limit}`;
      const response = await apiClient.get(urlString);
      return response.data;
    }
  );

  const {
    data: outOfStockData,
    isLoading: isLoadingOutOfStock,
    isFetching: isFetchingOutOfStock,
  } = useQuery<any, Error>(
    [
      "get-all-out-of-products",
      debouncedOutOfStockValue,
      outOfStockPage,
      limit,
    ],
    async () => {
      let urlString = `${constants.OUT_OF_STOCK_PRODUCTS}?search=${[
        "productName",
        debouncedOutOfStockValue,
      ]}&page=${outOfStockPage}&limit=${limit}`;
      const response = await apiClient.get(urlString);
      return response.data;
    }
  );

  // console.log(
  //   {
  //     outOfStockData,
  //   },
  //   "....--- "
  // );

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
                type="search by product name"
                onChange={(e) =>
                  tab === "Products"
                    ? setSearchQuery(e.target.value)
                    : setOutOfStockSearchQuery(e.target.value)
                }
                value={tab === "Products" ? searchQuery : outOfStockSearchQuery}
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
                    <Table
                      columns={columns}
                      data={data ? data.products : []}
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
                triggerTitle: "Products",
                onClick: () => setTab("Products"),
              },
              {
                content: (
                  <>
                    <Table
                      columns={columns}
                      data={outOfStockData ? outOfStockData.products : []}
                      loading={isLoadingOutOfStock}
                    />
                    <div className="pb-20">
                      {data && data.total > limit && (
                        <PaginatedItems
                          PageNumber={outOfStockPage}
                          TotalCount={outOfStockData ? outOfStockData.total : 0}
                          currentTotal={
                            outOfStockData ? outOfStockData.currentTotal : 0
                          }
                          itemsPerPage={limit}
                          setCurrentPage={(num) => {
                            setOutOfStockPage(num);
                          }}
                          setItemsPerPage={() => {}}
                          showEntries
                          isLoading={
                            isLoadingOutOfStock || isFetchingOutOfStock
                          }
                        />
                      )}
                    </div>
                  </>
                ),
                triggerId: "tab2",
                triggerTitle: "Out Of Stock!",
                onClick: () => setTab("outOfStock"),
              },
            ]}
          />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;