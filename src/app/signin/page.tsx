"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";
import * as Yup from "yup";
import { useSession, signIn } from "next-auth/react";
import { useFormik } from "formik";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch } from "@/redux/hooks";
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password Is Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();

  const dispatch = useAppDispatch();

  const { errors, values, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        setIsLoading(true);
        signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        }).then((response) => {
          if (
            response?.status.toString().startsWith("4") ||
            response?.status.toString().startsWith("5")
          ) {
            dispatch(
              openNotificationWithMessage({
                type: "error",
                title: "Error Signing In",
                description:
                  response?.error !== "undefined"
                    ? response?.error || "Invalid Login Credentials"
                    : "Invalid Login Credentials",
              })
            );
            setIsLoading(false);
            return;
          }
          setIsLoading(false);
          dispatch(
            openNotificationWithMessage({
              type: "success",
              title: "Login Successful",
              description: "",
            })
          );
        });
      },
    });

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
    // console.log('Email: ', email);
  };

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session && session.user) {
      router.push("/");
    }
  }, [router, session, status]);

  return (
    <div className="flex items-center justify-center py-14">
      <form
        onSubmit={handleSignIn}
        className=" w-full px-10 md:w-[70vw] lg:w-[35vw]"
      >
        <div className="flex justify-center mb-16">
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
        <h2 className="text-center text-3xl font-bold mb-6">Welcome back!</h2>
        <div className="mb-8 relative">
          <CiUser className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type="text"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur("email")}
          />
          <div className="h-2">
            <p className="text-xs text-red-500">
              {touched.email && errors.email ? errors.email : ""}
            </p>
          </div>
        </div>
        <div className="mb-8 relative">
          <div className="relative">
            <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              id="password"
              name="password"
              onBlur={handleBlur("password")}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-4 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
            <div className="h-2">
              <p className="text-xs text-red-500">
                {touched.password && errors.password ? errors.password : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 font-medium">
            <div className="flex items-center cursor-pointer">
              <div className="flex  items-center">
                <input
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-[#FA0303] h-4 w-4 rounded"
                  id="flowbite"
                  aria-describedby="flowbite"
                  type="checkbox"
                />
                <label
                  className="text-sm cursor-pointer font-medium ml-2 text-[#67748E]"
                  htmlFor="flowbite"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link href="/forgot-password" className="inline text-black ">
              Forgot password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSignIn}
          className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4"
        >
          {isLoading ? <Loader height={23} width={20} /> : "Login"}
        </button>
        <div className="text-center font-medium">
          <span className="inline text-[#67748E]">Don`t have an account?</span>{" "}
          <Link href="/register" className="inline text-black ">
            Register
          </Link>
        </div>
        <div className="text-center font-medium mt-2">
          <Link href="/get-verification-email" className="inline text-black ">
            Get verification Email
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
