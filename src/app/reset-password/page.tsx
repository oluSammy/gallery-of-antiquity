"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useApiClient from "@/hooks/useApiClient";
import { useFormik } from "formik";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { constants } from "@/constants/constants";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/loader/Loader";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const schema = Yup.object().shape({
  password: Yup.string()
    .required("Password Is Required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const Page = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const params = useSearchParams();

  const token = params?.get("token");

  const apiClient = useApiClient();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { values, handleChange, errors, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        if (!token) {
          dispatch(
            openNotificationWithMessage({
              type: "error",
              title: "Reset token missing",
              description: "Please check your email for the reset link",
            })
          );

          return router.push("/forgot-password");
        }
        setIsLoading(true);

        await apiClient.post(constants.RESET_PASSWORD(token), {
          password: values.password,
          passwordConfirm: values.confirmPassword,
        });
        setIsLoading(false);
        router.push("/signin");
        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: "Password Reset Successfully",
          })
        );
      } catch (error: any) {
        setIsLoading(false);
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Password Reset Error",
            description: "Unable to reset password",
          })
        );
      }
    },
    validationSchema: schema,
  });

  const reset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      handleSubmit();
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form onSubmit={reset} className=" w-full px-10 md:w-[70vw] lg:w-[35vw]">
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
        <h2 className="text-center text-3xl font-bold mb-6">Reset Password</h2>

        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type={showPassword.password ? "text" : "password"}
            id="password"
            name="password"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          >
            {showPassword.password ? <IoEyeOff /> : <IoEye />}
          </div>
          <div className="h-2">
            <p className="text-xs text-red-500">
              {errors.password ? errors.password : ""}
            </p>
          </div>
        </div>
        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword.confirmPassword ? "text" : "password"}
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.confirmPassword,
              })
            }
          >
            {showPassword.confirmPassword ? <IoEyeOff /> : <IoEye />}
          </button>
          <div className="h-2">
            <p className="text-xs text-red-500">
              {errors.confirmPassword ? errors.confirmPassword : ""}
            </p>
          </div>
        </div>

        <button
          // onClick={reset}
          type="submit"
          className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4"
        >
          {isLoading ? <Loader height={30} width={20} /> : "Reset"}
        </button>
      </form>
    </div>
  );
};

export default Page;
