"use client";

import Book from "@/components/Book/Books";
import PageHeader from "@/components/PageHeader/PageHeader";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import PaginatedItems from "@/components/pagination";
import PageLayout from "@/containers/PageLayout";
import { useGetCategoriesByTopCategoryById } from "@/hooks/useGetCategories";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useAppSelector } from "@/redux/hooks";
import { decodeURIString } from "@/utils/decodeUri";
import { useState } from "react";

const limit = 30;

const Page = ({ params }: { params: { slug: string } }) => {
  const topCategories = useAppSelector(
    (state) => state.topCategories.topCategories
  );
  const slug = decodeURIString(params.slug);
  const [page, setPage] = useState(1);
  const selectedTopCategory = topCategories.find(
    (item: any) => item.productType.split(" ").join("-") === slug
  );
  const { data } = useGetCategoriesByTopCategoryById(selectedTopCategory?._id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilterOptions, setSelectedCategoryFilterOptions] =
    useState<string[]>(["All"]);
  const categories = data
    ? [
        {
          active: selectedCategoryFilterOptions.includes("All"),
          label: "All",
          value: "All",
          onClick: () => setSelectedCategoryFilterOptions(["All"]),
          _id: "",
          categoryName: "",
        },
        ...data.category.map((category: any) => ({
          active: selectedCategoryFilterOptions.includes(category.categoryName),
          label: category.categoryName,
          value: category.categoryName,
          _id: category._id,
          categoryName: category.categoryName,
          onClick: () =>
            setSelectedCategoryFilterOptions([category.categoryName]),
        })),
      ]
    : [];

  const { data: products, isFetching: isFetchingProducts } = useGetProducts(
    selectedCategoryFilterOptions,
    categories,
    [selectedTopCategory?.productType || ""],
    topCategories,
    searchQuery,
    page,
    limit
  );

  return (
    <PageLayout>
      <div className="container mx-auto my-20 ">
        <PageHeader title={slug} />

        <SearchFilter
          searchPlaceholder={`Search ${slug}`}
          categories={data ? [...categories] : []}
          showFilter={false}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <div className="grid grid-cols-12 gap-x-4 mt-20">
          {isFetchingProducts
            ? Array.from({ length: 12 }, (_, index) => index).map(
                (_, index) => (
                  <div
                    key={index}
                    className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-2 lg:px-0"
                  >
                    <div className="animate-pulse w-full h-60 bg-slate-300 "></div>
                    <p className="animate-pulse bg-slate-300 w-2/5 mt-1 h-3">
                      &nbsp;
                    </p>
                    <p className="animate-pulse bg-slate-300 w-1/5 mt-1 h-2">
                      &nbsp;
                    </p>
                  </div>
                )
              )
            : products?.products.map((product: any) => {
                let min = 0;
                let max = 0;

                if (product.amountRange && product.amountRange[0]) {
                  min = product.amountRange[0].amount;
                  max = product.amountRange[0].amount;

                  product.amountRange.forEach((level: any) => {
                    if (level.amount > max) {
                      max = level.amount;
                    }
                    if (level.amount < min) {
                      min = level.amount;
                    }
                  });
                }
                return (
                  <div
                    key={product._id}
                    className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0"
                  >
                    <Book
                      imgSrc={product.productPic}
                      name={product.productName}
                      price={product.amount}
                      link={`/product/${product._id}`}
                      priceRange={product.amountRange ? [min, max] : [0, 0]}
                    />
                  </div>
                );
              })}
        </div>
        <div className="pb-20">
          <PaginatedItems
            PageNumber={page}
            TotalCount={products ? products?.total : 0}
            currentTotal={products ? products?.products.length : 0}
            itemsPerPage={limit}
            setCurrentPage={(num) => {
              setPage(num);
            }}
            setItemsPerPage={() => {}}
            showEntries
            isLoading={isFetchingProducts}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
