"use client";

import ActionButton from "@/components/Button/ActionButton";
import CustomInput from "@/components/Input/Input";
import Loader from "@/components/loader/Loader";
import { constants } from "@/constants/constants";
import AdminPageLayout from "@/containers/AdminPageLayout";
import useApiClient from "@/hooks/useApiClient";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useMutation, useQuery } from "react-query";

const PER_PAGE = 10;

const Page = ({ params }: { params: { id: string } }) => {
  const [category, setCategory] = useState("");

  const url = constants.CATEGORY(params.id);
  const apiClient = useApiClient();
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery<any, Error>(
    ["get-one-category", params.id],

    async () => {
      const response = await apiClient.get(url);
      return response.data;
    }
  );

  const { isLoading: isUpdating, mutate } = useMutation({
    mutationFn: async () => {
      try {
        await apiClient.put(url, {
          categoryName: category,
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Top Category Updated",
          })
        );
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: "Unable to update a top category",
          })
        );
      }
    },
  });

  useEffect(() => {
    if (data) {
      setCategory(data.category.categoryName);
    }
  }, [data]);

  return (
    <AdminPageLayout pageTitle="Categories" pageLabel="Update Category">
      <div className="mt-8 flex items-center ">
        <Link
          href="/admin/categories"
          className={`flex items-center mr-4 text-[#737373] hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-2">Categories</span>
          <IoIosArrowForward />
        </Link>
        <button
          className={`flex items-center mr-8 hover:bg-[#f7f7f7] font-bold px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-5">Update category</span>
        </button>
      </div>
      <div className="mt-8 ml-5">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-full">
            <div className="flex items-center ">
              <CustomInput
                value={category}
                setValue={setCategory}
                type="text"
                placeholder="Top Category"
              />
              {isLoading && (
                <div className="w-fit ml-4">
                  <Loader height={40} width={40} color="#666666" />
                </div>
              )}
            </div>

            <ActionButton
              label="Update Category"
              // onClick={() => {
              // }}
              onClick={mutate}
              className="mt-8"
              disabled={!category}
              isLoading={isUpdating}
            />
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
