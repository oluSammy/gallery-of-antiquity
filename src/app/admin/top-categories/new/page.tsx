"use client";

import ActionButton from "@/components/Button/ActionButton";
import CustomInput from "@/components/Input/Input";
import { constants } from "@/constants/constants";
import AdminPageLayout from "@/containers/AdminPageLayout";
import useApiClient from "@/hooks/useApiClient";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useMutation } from "react-query";

const Page = () => {
  const [category, setCategory] = useState("");
  const apiCLient = useApiClient();
  const dispatch = useAppDispatch();

  const { isLoading, data, mutate } = useMutation({
    mutationFn: async () => {
      try {
        await apiCLient.post(constants.CREATE_TOP_CATEGORY, {
          categoryName: category,
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Top Category Created",
          })
        );
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: "Unable to create top category",
          })
        );
      }
    },
  });

  return (
    <AdminPageLayout pageTitle="Top Categories" pageLabel="Top Categories">
      <div></div>
      <div className="mt-8 flex items-center ">
        <Link
          href="/admin/top-categories"
          className={`flex items-center mr-4 text-[#737373] hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-2">Top Categories</span>
          <IoIosArrowForward />
        </Link>
        <button
          className={`flex items-center mr-8 hover:bg-[#f7f7f7] px-2 py-1 cursor-pointer rounded-sm w-fit`}
        >
          <span className="mr-5">Add a top category</span>
        </button>
      </div>
      <div className="mt-8 ml-5">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-full">
            <CustomInput
              value={category}
              setValue={setCategory}
              type="text"
              placeholder="Top Category"
            />

            <ActionButton
              label="Create New"
              onClick={mutate}
              className="mt-8"
              disabled={!category}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default Page;
