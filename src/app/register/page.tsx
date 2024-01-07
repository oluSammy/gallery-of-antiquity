"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { camelCaseToSpaces } from "@/utils/camelCaseToSpaces";
import Loader from "@/components/loader/Loader";
import useApiClient from "@/hooks/useApiClient";
import { useMutation } from "react-query";
import { constants } from "@/constants/constants";
import { useAppDispatch } from "@/redux/hooks";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useRouter } from "next/navigation";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name Is Required"),
  lastName: Yup.string().required("Last Name Is Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Phone Number Is Required"),
  password: Yup.string()
    .required("Password Is Required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const iconClassName = "absolute top-1/2 -translate-y-1/2 left-4";

const icons = {
  firstName: <CiUser className={iconClassName} />,
  lastName: <CiUser className={iconClassName} />,
  email: <AiOutlineMail className={iconClassName} />,
  phoneNumber: <IoIosPhonePortrait className={iconClassName} />,
  password: <CiLock className={iconClassName} />,
  confirmPassword: <CiLock className={iconClassName} />,
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const Page = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const apiClient = useApiClient();
  const mutation = useMutation({
    mutationFn: (data: typeof initialValues) =>
      apiClient.post(constants.SIGN_UP, data),
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        mutation
          .mutateAsync(values)
          .then((response) => {
            console.log(response, "qwerty");
            // push to login page

            dispatch(
              openNotificationWithMessage({
                type: "success",
                title: "Account Created",
                description: "A verification link has been sent to your email",
              })
            );

            router.push("/signin");
          })
          .catch((error) => {
            dispatch(
              openNotificationWithMessage({
                type: "error",
                title: "Error Creating Account",
                description: error.response.data.errorMessage.message,
              })
            );
          });
      },
      validationSchema: signUpSchema,
    });

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      handleSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const getKey = (key: string) => {
    return key === "password" || key === "confirmPassword"
      ? showPassword[key] === true
        ? "text"
        : "password"
      : key === "phoneNumber"
      ? "number"
      : "text";
  };

  return (
    <div className="flex items-center justify-center py-4">
      <form
        className=" w-full px-10 md:w-[70vw] lg:w-[35vw]"
        onSubmit={register}
      >
        <div className="flex justify-center mb-4">
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
        <h2 className="text-center text-3xl font-bold mb-6">Create Account</h2>
        {Object.entries(values).map(([key]) => (
          <div className="mb-5" key={key}>
            <div className="relative">
              {icons[key as keyof typeof icons]}
              <input
                id={key}
                name={key}
                type={getKey(key)}
                className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
                placeholder={camelCaseToSpaces(key)}
                onChange={handleChange}
                value={values[key as keyof typeof values]}
                onBlur={handleBlur(key)}
              />
              {key === "confirmPassword" || key === "password" ? (
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-4 "
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      [key]: !showPassword[key],
                    })
                  }
                >
                  {showPassword[key] ? <IoEyeOff /> : <IoEye />}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="h-2">
              <p className="text-xs text-red-500">
                {/* <ErrorMessage name={key} /> */}
                {touched[key as keyof typeof touched] === true
                  ? errors[key as keyof typeof errors]
                  : ""}{" "}
              </p>
            </div>
          </div>
        ))}
        <button className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4">
          {mutation.isLoading ? <Loader height={30} width={20} /> : "Register"}
        </button>
        <div className="text-center font-medium">
          <span className="inline text-[#67748E]">
            Already have an account?
          </span>{" "}
          <Link href="/signin" className="inline text-black ">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
