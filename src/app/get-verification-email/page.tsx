"use client";

import Link from "next/link";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import * as Yup from "yup";
import { useFormik } from "formik";
import Loader from "@/components/loader/Loader";
import { useState } from "react";
import useApiClient from "@/hooks/useApiClient";
import { useQuery } from "react-query";
import { constants } from "@/constants/constants";
import { useAppDispatch } from "@/redux/hooks";
import { openNotificationWithMessage } from "@/redux/Notification";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
};

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const apiCLient = useApiClient();

  const router = useRouter();

  const {
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log({ values });

      try {
        const response = await apiCLient.get(
          constants.GET_EMAIL_VERIFICATION(values.email)
        );
        setIsLoading(false);
        router.push("/signin");
        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: `Verification link sent to ${values.email}`,
          })
        );
      } catch (error: any) {
        setIsLoading(false);
        console.log(error.response.data.errorMessage.message);
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: error.response.data.errorMessage.message,
          })
        );
      }
    },
  });

  const dispatch = useAppDispatch();

  const getEmail = () => {
    console.log({ isValid });
    handleSubmit();
  };

  return (
    <div className="flex items-center justify-center py-14">
      <div className=" w-full px-10 md:w-[70vw] lg:w-[35vw]">
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
        <h2 className="text-center text-3xl font-bold mb-6">
          Get Email Verification!
        </h2>
        <div className="mb-8 relative">
          <CiUser className="absolute top-1/2 -translate-y-1/2 left-4 " />
          <input
            type="text"
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className="h-2">
            <p className="text-xs text-red-500">
              {touched.email && errors.email ? errors.email : ""}
            </p>
          </div>
        </div>
        <button
          onClick={getEmail}
          type="submit"
          className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4"
        >
          {isLoading ? (
            <Loader height={23} width={20} />
          ) : (
            "Get Verification Email"
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
