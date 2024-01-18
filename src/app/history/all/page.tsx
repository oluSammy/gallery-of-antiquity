"use client";

import PageHeader from "@/components/PageHeader/PageHeader";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import StatesPicture from "@/components/StatesPicture/StatesPicture";
import PageLayout from "@/containers/PageLayout";
import React from "react";

const page = () => {
  return (
    <PageLayout>
      <div className="container mx-auto my-20 ">
        <PageHeader title={"Nigeria States History"} />
        <SearchFilter
          searchPlaceholder="Search States"
          categories={[
            {
              active: true,
              label: "All States",
              value: "all",
              onClick: () => {},
            },
            {
              label: "Northern States",
              value: "north",
              onClick: () => {},
            },
            {
              label: "Eastern States",
              value: "north",
              onClick: () => {},
            },
            {
              label: "Southern States",
              value: "north",
              onClick: () => {},
            },
            {
              label: "Western States",
              value: "north",
              onClick: () => {},
            },
          ]}
          showFilter={false}
        />

        <div className="container mx-auto my-10">
          <div className="grid grid-cols-12 gap-x-6">
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/lagos.png"
                name="Abuja"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/oyo.png"
                name="Oyo"
                text="Yobe is a state located in northeastern Nigeria. A mainly agricultural state, it was created on 27 August 1991.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/yobe.png"
                name="Lagos"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
