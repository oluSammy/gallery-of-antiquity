import Link from "next/link";
import React from "react";
import StatesPicture from "../StatesPicture/StatesPicture";
import { IoIosArrowForward } from "react-icons/io";

const HistorySection = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto">
        <div className="flex mb-8 justify-between items-center px-4">
          <h2 className="text-[#363636] font-semibold text-4xl relative border-w py-2 ">
            History of the states
          </h2>
          <Link
            href="/gallery"
            className="text-[#FF4250] underline flex items-center justify-center"
          >
            <span>See More</span>
            <span className="inline ml-1">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
