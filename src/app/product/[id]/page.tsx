"use client";

import Dropdown from "@/components/Dropdown/Dropdown";
import SelectTicket from "@/components/SelectTicket/SelectTicket";
import TabComponent from "@/components/TabComponent/TabComponent";
import PageLayout from "@/containers/PageLayout";
import { formatNumber } from "@/utils/formatnumber";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import useApiClient from "@/hooks/useApiClient";
import { constants } from "@/constants/constants";

const Page = ({ params }: { params: { id: string } }) => {
  const [qty, setQty] = React.useState(0);
  const [tab, setTab] = React.useState<"about" | "reviews">("about");
  const apiClient = useApiClient();
  const [selectedSize, setSelectedSize] = useState<
    "medium" | "small" | "large" | ""
  >("");
  const [selectedSizePrice, setSelectedSizePrice] = useState(0);

  const url = constants.PRODUCTS(params.id);

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    ["get-single-product", params.id],
    async () => {
      const response = await apiClient.get(url);
      return response.data;
    }
  );

  console.log({ data, isLoading, isFetching });

  let min = 0;
  let max = 0;

  if (data && data?.product[0].amountRange[0]) {
    min = data?.product[0].amountRange[0].amount;
    max = data?.product[0].amountRange[0].amount;

    data?.product[0].amountRange.forEach((level: any) => {
      if (level.amount > max) {
        max = level.amount;
      }
      if (level.amount < min) {
        min = level.amount;
      }
    });
  }

  return (
    <PageLayout>
      <div className=" container mx-auto my-16">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-full lg:col-span-7">
            {isLoading ? (
              <div className="animate-pulse w-full h-full bg-gray-300 rounded-lg ">
                &nbsp;
              </div>
            ) : (
              <figure className="w-full h-full rounded-md">
                <Image
                  className="object-fit-cover w-full h-full rounded-md"
                  alt="product image"
                  width={500}
                  height={500}
                  src={data?.product[0].productPic}
                />
              </figure>
            )}
          </div>
          <div className="col-span-full lg:col-span-5">
            <div className="border border-[#E2E2E2] rounded-md p-4">
              <div className="-[#DEDADA] border-b pb-6">
                {isLoading ? (
                  <p className="animate-pulse h-6 w-3/6 bg-gray-200"></p>
                ) : (
                  <h6 className="font-semibold text-3xl text-[#161616] my-8">
                    {data?.product[0].productName}
                  </h6>
                )}
                {isLoading ? (
                  <p className="animate-pulse h-5 mt-2 w-3/6 bg-gray-200"></p>
                ) : (
                  <p className="text-black font-light text-2xl">
                    {!data?.product[0].amount ? (
                      <>
                        &#8358; {formatNumber(min)} - &#8358;{" "}
                        {formatNumber(max)}
                      </>
                    ) : (
                      <>&#8358; {data?.product[0].amount}</>
                    )}
                  </p>
                )}
              </div>
              <div className="mt-8">
                {!data?.product[0].amount && (
                  <p className="text-lg font-normal text-black">Size: </p>
                )}

                {!data?.product[0].amount && (
                  <div className="mt-8 mb-8">
                    {isLoading ? (
                      <p className="animate-pulse h-7 mt-2 w-1/6 bg-gray-200"></p>
                    ) : data?.product[0].amountRange ? (
                      <Dropdown
                        DropdownTrigger={
                          <span className="text-[18px] font-normal text-blue-link hover:text-[#EB0B0B] flex items-center ">
                            {selectedSize ? (
                              <>
                                {selectedSize} - &#8358;{" "}
                                {formatNumber(selectedSizePrice)}
                              </>
                            ) : (
                              "Select Size"
                            )}
                            <span className="ml-0.5">
                              <MdOutlineArrowDropDown size={22} />
                            </span>
                          </span>
                        }
                        DropdownContent={
                          <ul className="flex flex-col overflow-hidden">
                            {false
                              ? "loading..."
                              : data?.product[0].amountRange?.map(
                                  (item: any) => {
                                    return (
                                      <button
                                        onClick={() => {
                                          setSelectedSize(item.size);
                                          setSelectedSizePrice(item.amount);
                                        }}
                                        key={item}
                                        className="px-6 py-1.5 w-full text-sm cursor-pointer capitalize hover:bg-gray-50 "
                                      >
                                        {item.size} - &#8358;{" "}
                                        {formatNumber(item.amount)}
                                      </button>
                                    );
                                  }
                                )}
                          </ul>
                        }
                      />
                    ) : (
                      ""
                    )}
                  </div>
                )}

                <SelectTicket
                  price={(data?.product[0].amount || selectedSizePrice) * qty}
                  value={qty}
                  setValue={(value) => setQty(value)}
                  name={"Qty"}
                  active={true}
                  isFree={false}
                  isProduct={true}
                />
                <button className="bg-[#FA0303] text-white cursor-pointer px-6 py-2 rounded-full flex items-center ">
                  <span className="mr-1">
                    <HiOutlineShoppingBag className="" color="red" />
                  </span>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 relative">
          <TabComponent
            contents={[
              {
                content: (
                  <ProductDescription
                    description={data?.product[0].description}
                  />
                ),
                triggerId: "tab1",
                triggerTitle: "About",
                onClick: () => setTab("about"),
              },
              {
                content: <ProductReview />,
                triggerId: "tab2",
                triggerTitle: "Reviews",
                onClick: () => setTab("reviews"),
              },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="text-[#635B5B] font-normal text-lg lg:w-5/6">
      {description}
    </div>
  );
};

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="mb-8">
      <p className="text-[#F12F2F] text-lg font-light">
        * Be the first to rate and review
      </p>
      <h4 className="font-semibold mb-4 text-xl">Rating Product</h4>

      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((item) => (
          <svg
            className={`w-6 h-6 ${
              rating >= item ? "text-[#F12F2F]" : "text-[#E0E0E0]"
            } ms-1 cursor-pointer`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            key={item}
            onClick={() => setRating(item)}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Page;
