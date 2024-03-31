"use client";

import ActionButton from "@/components/Button/ActionButton";
import Dropdown from "@/components/Dropdown/Dropdown";
import CustomInput from "@/components/Input/Input";
import ImgUpload from "@/components/imgUpload/imgUpload";
import { constants } from "@/constants/constants";
import AdminPageLayout from "@/containers/AdminPageLayout";
import useApiClient from "@/hooks/useApiClient";
import useGetTopCategories from "@/hooks/useGetTopCategories";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useMutation, useQuery } from "react-query";

const Page = () => {
  const [category, setCategory] = useState({ id: "", name: "" });
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [files, setFiles] = useState<any[]>([]);
  const [topCategory, setTopCategory] = useState({
    id: "",
    name: "",
  });
  const apiClient = useApiClient();
  const dispatch = useAppDispatch();

  const { data: session } = useSession();

  // fetch all top categories
  const { data: topCategories, isLoading: isLoadingTopCategories } =
    useGetTopCategories(1, 10000, "", "");

  const { data: categories, isFetching: isFetchingCategories } = useQuery<
    any,
    Error
  >(
    ["get-categories-by-top-category-Id", topCategory.id],
    async () => {
      let urlString = `${constants.categoriesByTopCategoryId(topCategory.id)}`;
      const response = await apiClient.get(urlString);
      return response.data;
    },
    {
      keepPreviousData: true,
      enabled: topCategory.id ? true : false,
    }
  );

  const { isLoading, mutate, data } = useMutation({
    mutationFn: async () => {
      try {
        const formData = new FormData();
        formData.append("productPic", files[0]);
        formData.append("productName", name);
        size.split(",").map((item: string, index: number) => {
          formData.append("size", item);
        });
        formData.append("productCategoryId", category.id);
        formData.append("productFeatId", topCategory.id);
        formData.append("description", description);
        formData.append("amount", amount);
        formData.append("quantity", quantity);
        formData.append("inStock", "true");

        const data = await apiClient.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL}/product`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: `Bearer ${session?.user.accessToken}`,
            },
          }
        );

        // reset states
        setName("");
        setSize("");
        setDescription("");
        setAmount("");
        setQuantity("");
        setFiles([]);
        setTopCategory({
          id: "",
          name: "",
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Product Created",
          })
        );
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: "Unable to create product",
          })
        );
      }
    },
  });

  return (
    <AdminPageLayout pageTitle="Products" pageLabel="Create Products">
      <div className="mt-8 flex items-center ">
        <Link
          href="/admin/products"
          className={`flex items-center mr-4 text-[#737373] hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-2">Products</span>
          <IoIosArrowForward />
        </Link>
        <button
          className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer font-bold rounded-sm w-fit`}
        >
          <span className="mr-5">Add Products</span>
        </button>
      </div>
      <div className="mt-8 ml-5 pb-20">
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
                      : topCategories?.products?.products?.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setCategory({ id: "", name: "" });
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
                    {category.id ? category.name : "Select Category"}
                    <span className="ml-0.5">
                      <MdOutlineArrowDropDown size={22} />
                    </span>
                  </span>
                }
                DropdownContent={
                  <ul className="flex flex-col overflow-hidden">
                    {isFetchingCategories
                      ? "loading..."
                      : categories?.category?.map((item: any) => {
                          return (
                            <button
                              onClick={() => {
                                setCategory({
                                  id: item._id,
                                  name: item.categoryName,
                                });
                              }}
                              key={item.categoryName}
                              className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                            >
                              {item.categoryName}
                            </button>
                          );
                        })}
                  </ul>
                }
              />
            </div>
            <CustomInput
              value={name}
              setValue={setName}
              type="text"
              placeholder="Product Name"
              className="mb-2"
            />
            <CustomInput
              value={description}
              setValue={setDescription}
              type="text"
              placeholder="Product Description"
              className="mb-2"
            />
            <CustomInput
              value={amount}
              setValue={setAmount}
              type="number"
              placeholder="Amount"
              className="mb-2"
            />
            <CustomInput
              value={size}
              setValue={setSize}
              type="text"
              placeholder="Size"
              className="mb-2"
            />
            <CustomInput
              value={quantity}
              setValue={setQuantity}
              type="number"
              placeholder="quantity"
              className="mb-2"
            />

            <ImgUpload files={files} setFiles={setFiles} />

            <ActionButton
              label="Create New Product"
              onClick={mutate}
              className="mt-8"
              disabled={
                !category.id ||
                !topCategory.id ||
                !name ||
                !amount ||
                !quantity ||
                !files.length
              }
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
