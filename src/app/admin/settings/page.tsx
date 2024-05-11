import AdminPageLayout from "@/containers/AdminPageLayout";
import React from "react";

const page = () => {
  return (
    <AdminPageLayout pageTitle="Settings">
      <div className="border border-[#E2E8F0] mt-12 p-4">
        <h2 className="font-medium text-2xl">My Profile </h2>

        <div className="mt-4">
          <h5 className="font-medium text-base text-[#030303]">
            Official Email Address
          </h5>
          <p className="text-[#636363] text-xs font-extralight ">
            This is where your confirmation email, important messages and
            notifications will be sent.
          </p>
          <div className="border border-[#CBD5E1] p-3 mt-3">
            <p className="text-[#6A6A6A]">center5@gmail.com</p>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-medium text-base text-[#030303]">
            Official Phone Number
          </h5>
          <div className="border border-[#CBD5E1] p-3 mt-3">
            <p className="text-[#6A6A6A]">+234 810 0096 530</p>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default page;
