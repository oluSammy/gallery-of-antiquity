import { useQuery } from "react-query";
import useApiClient from "./useApiClient";
import { constants } from "@/constants/constants";

export const useGetCategories = (
  value: string,
  page: number,
  limit: number
) => {
  const apiClient = useApiClient();

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    ["get-all-categories", value, page, limit],
    async () => {
      let urlString = `${constants.CATEGORY()}?search=${[
        value,
        "categoryName",
      ]}&page=${page}&limit=${limit}`;
      const response = await apiClient.get(urlString);
      return response.data;
    }
  );

  return { data, isLoading, isFetching };
};

export const useGetCategoriesByTopCategoryById = (id?: string) => {
  const apiClient = useApiClient();

  const { data: categories, isFetching: isFetchingCategories } = useQuery<
    any,
    Error
  >(
    ["get-categories-by-top-category-Id", id],
    async () => {
      let urlString = `${constants.categoriesByTopCategoryId(id || "")}`;
      const response = await apiClient.get(urlString);
      return response.data;
    },
    {
      keepPreviousData: true,
      enabled: id ? true : false,
    }
  );

  return { data: categories, isFetching: isFetchingCategories };
};
