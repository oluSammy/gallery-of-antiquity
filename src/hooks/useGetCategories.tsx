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
        "categoryName",
        value,
      ]}&page=${page}&limit=${limit}`;
      const response = await apiClient.get(urlString);
      return response.data;
    }
  );

  return { data, isLoading, isFetching };
};
