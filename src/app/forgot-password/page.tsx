"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import useApiClient from "@/hooks/useApiClient";
import * as Yup from "yup";
import { useFormik } from "formik";
import Loader from "@/components/loader/Loader";
import { useAppDispatch } from "@/redux/hooks";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues = {
  email: "",
};

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const apiClient = useApiClient();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { errors, values, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await apiClient.post("/forgot-password", {
          email: values.email,
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Email Sent",
            description: response.data.message,
          })
        );
        router.push("/");
      } catch (error: any) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: error.response.data.errorMessage.message,
          })
        );
      }
      setIsLoading(false);
    },
  });

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form className=" w-full px-10 md:w-[70vw] lg:w-[35vw]">
        <div className="flex justify-center mb-24">
          <Link href="/">
            <Image
              src="/daps.png"
              alt="Daps Logo"
              width={200}
              height={100}
              className="mr-4 z-10"
            />
          </Link>
        </div>
        <h2 className="text-center text-3xl font-bold mb-6">
          Forgot Password?
        </h2>
        <div className="mb-8 relative">
          <AiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          <div className="h-2">
            <p className="text-xs text-red-500">
              {errors.email ? errors.email : ""}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4"
          onClick={handleClick}
        >
          {isLoading ? <Loader height={23} width={20} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
