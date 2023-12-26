"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center py-20">
      <div className=" w-full px-10 md:w-[70vw] lg:w-[35vw]">
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
        <h2 className="text-center text-3xl font-bold mb-6">Update Password</h2>
        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Previous Password"
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>

        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1 " />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="New Password"
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>

        <div className="mb-8 relative">
          <CiLock className="absolute top-1/2 -translate-y-1/2 left-4 -mt-1" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-10 py-3  border-[0.5px] border-[#565353] rounded-md"
            placeholder="Password"
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        <button className="block bg-[#FA0303] text-center w-full rounded-md text-white py-3 font-medium text-base mb-4">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Page;
