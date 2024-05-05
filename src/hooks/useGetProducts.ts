import { constants } from "@/constants/constants";
import { useQuery } from "react-query";
import useApiClient from "./useApiClient";

export const useGetProducts = (
  selectedCategoryFilterOptions: string[],
  categoryFilterOptions: {
    categoryName: string;
    _id: string;
    value?: string;
  }[],
  selectedTopCategoryFilterOptions: string[],
  topCategoryFilterOptions: {
    productType: string;
    _id: string;
  }[],
  searchValue: string,
  page: number,
  limit: number,
  inStock: boolean = true
) => {
  const baseUrl = inStock
    ? constants.PRODUCTS()
    : constants.OUT_OF_STOCK_PRODUCTS;

  const categoryNames = selectedCategoryFilterOptions.filter(Boolean);
  const catIds = categoryNames
    .map((name) => {
      const option = categoryFilterOptions.find((option) => {
        if (option.categoryName === name || option.value === name)
          return option;
      });

      console.log({
        name,
        option,
      });

      return option?._id;
    })
    .join("-");

  const topCategoryNames = selectedTopCategoryFilterOptions.filter(Boolean);
  const topIds = topCategoryNames
    .map((name) => {
      const option = topCategoryFilterOptions.find((option) => {
        if (option.productType === name) return option;
      });
      return option?._id;
    })
    .join("-");

  const url = searchValue
    ? `${baseUrl}?search=${[
        searchValue,
        "productName",
      ]}&page=${page}&limit=${limit}&categoryId=${catIds}&topCategoryId=${topIds}`
    : `${baseUrl}?page=${page}&limit=${limit}&categoryId=${catIds}&topCategoryId=${topIds}`;
  const apiClient = useApiClient();

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    [
      inStock ? "get-all-products" : "get-out-of-stock-products",
      searchValue,
      page,
      limit,
      selectedCategoryFilterOptions,
      selectedTopCategoryFilterOptions,
    ],
    async () => {
      const response = await apiClient.get(url);
      return response.data;
    }
  );

  return { data, isLoading, isFetching };
};
