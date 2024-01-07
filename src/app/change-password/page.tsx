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
import Loader from "@/components/loader/Loader";
import { useSession, signOut } from "next-auth/react";

const initialValues = {
  password: "",
  confirmPassword: "",
  prevPassword: "",
};

const schema = Yup.object().shape({
  prevPassword: Yup.string(),
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
    prevPassword: false,
    password: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const apiClient = useApiClient();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { values, handleChange, errors, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit: async (values) => {
        try {
          setIsLoading(true);

          const response = await apiClient.post(constants.CHANGE_PASSWORD, {
            previousPassword: values.prevPassword,
            password: values.password,
            passwordConfirm: values.confirmPassword,
            email: session?.user.data.email,
          });

          console.log({ response });

          setIsLoading(false);
          // router.push("/?status=signout");
          // signOut();
          signOut({ redirect: false }).then(() => {
            router.push("/signin"); // Redirect to the dashboard page after signing out
          });
          dispatch(
            openNotificationWithMessage({
              type: "success",
              title: "Done",
              description: "Password changed Successfully",
            })
          );
        } catch (error: any) {
          setIsLoading(false);
          console.log({ error: error.response.data.errorMessage.message });
          dispatch(
            openNotificationWithMessage({
              type: "error",
              title: "Password update Error",
              description: error.response.data.errorMessage.message,
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
    } catch (error) {
      console.log(error);
    }
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
            type={showPassword.prevPassword ? "text" : "password"}
            id="prevPassword"
            name="prevPassword"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Previous Password"
            onChange={handleChange}
            onBlur={handleBlur("prevPassword")}
            value={values.prevPassword}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() =>
              setShowPassword({
                ...showPassword,
                prevPassword: !showPassword.prevPassword,
              })
            }
          >
            {showPassword.prevPassword ? <IoEyeOff /> : <IoEye />}
          </div>
          <div className="h-2">
            <p className="text-xs text-red-500">
              {touched.prevPassword && errors.prevPassword
                ? errors.prevPassword
                : ""}
            </p>
          </div>
        </div>

        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type={showPassword.password ? "text" : "password"}
            id="password"
            name="password"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="New Password"
            onChange={handleChange}
            onBlur={handleBlur("password")}
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
              {touched.password && errors.password ? errors.password : ""}
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
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() =>
              setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
              })
            }
          >
            {showPassword.confirmPassword ? <IoEyeOff /> : <IoEye />}
          </div>
          <div className="h-2">
            <p className="text-xs text-red-500">
              {touched.confirmPassword && errors.confirmPassword
                ? errors.confirmPassword
                : ""}
            </p>
          </div>
        </div>

        <button
          onClick={reset as any}
          type="submit"
          className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4"
        >
          {isLoading ? <Loader height={30} width={20} /> : "Update Password"}
        </button>
      </form>
    </div>
  );
};

export default Page;
