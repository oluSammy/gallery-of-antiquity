"use client";

import ActionButton from "@/components/Button/ActionButton";
import Dropdown from "@/components/Dropdown/Dropdown";
import CustomInput from "@/components/Input/Input";
import { constants } from "@/constants/constants";
import AdminPageLayout from "@/containers/AdminPageLayout";
import useApiClient from "@/hooks/useApiClient";
import useGetTopCategories from "@/hooks/useGetTopCategories";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useMutation } from "react-query";

const Page = () => {
  const [category, setCategory] = useState("");
  const [topCategory, setTopCategory] = useState({
    id: "",
    name: "",
  });
  const apiCLient = useApiClient();
  const dispatch = useAppDispatch();

  // fetch all top categories
  const { data: topCategories, isLoading: isLoadingTopCategories } =
    useGetTopCategories(1, 10000, "", "");

  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      try {
        await apiCLient.post(constants.CATEGORY(), {
          categoryName: category,
          productTypeId: topCategory.id,
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Category Created",
          })
        );
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: "Unable to create category",
          })
        );
      }
    },
  });

  return (
    <AdminPageLayout pageTitle="Categories" pageLabel="Create Category">
      <div className="mt-8 flex items-center ">
        <Link
          href="/admin/categories"
          className={`flex items-center mr-4 text-[#737373] hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-2">Categories</span>
          <IoIosArrowForward />
        </Link>
        <button
          className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer font-bold rounded-sm w-fit`}
        >
          <span className="mr-5">Add a category</span>
        </button>
      </div>
      <div className="mt-8 ml-5">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-full">
            <div className="mt-8 mb-8">
              <Dropdown
                DropdownTrigger={
                  <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                    {topCategory.id ? topCategory.name : "Select Top Category"}
                    <span className="ml-0.5">
                      <MdOutlineArrowDropDown size={22} />
                    </span>
                  </span>
                }
                DropdownContent={
                  <ul className="flex flex-col overflow-hidden">
                    {isLoadingTopCategories
                      ? "loading..."
                      : topCategories?.products?.products.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setTopCategory({
                                  id: item._id,
                                  name: item.productType,
                                });
                              }}
                              //   href={`/${item.link}`}
                              key={item.productType}
                              className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                            >
                              {item.productType}
                            </button>
                          );
                        })}
                  </ul>
                }
              />
            </div>
            <div className="mt-8 mb-8">
              <Dropdown
                DropdownTrigger={
                  <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                    {topCategory.id ? topCategory.name : "Select Top Category"}
                    <span className="ml-0.5">
                      <MdOutlineArrowDropDown size={22} />
                    </span>
                  </span>
                }
                DropdownContent={
                  <ul className="flex flex-col overflow-hidden">
                    {isLoadingTopCategories
                      ? "loading..."
                      : topCategories?.products?.products.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setTopCategory({
                                  id: item._id,
                                  name: item.productType,
                                });
                              }}
                              //   href={`/${item.link}`}
                              key={item.productType}
                              className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                            >
                              {item.productType}
                            </button>
                          );
                        })}
                  </ul>
                }
              />
            </div>
            <CustomInput
              value={category}
              setValue={setCategory}
              type="text"
              placeholder="Category"
            />

            <ActionButton
              label="Create New Category"
              onClick={mutate}
              className="mt-8"
              disabled={!category || !topCategory.id}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
