import { useQuery } from "react-query";
import useApiClient from "./useApiClient";
import { constants } from "@/constants/constants";

const useGetTopCategories = (
  page: number,
  limit: number,
  searchKey: string,
  search?: string
) => {
  const apiClient = useApiClient();

  let urlString = `${constants.TOP_CATEGORY()}?search=${[
    searchKey,
    search,
  ]}&page=${page}&limit=${limit}`;

  const { data, isLoading, isFetching } = useQuery<any, Error>(
    ["get-top-category", search, page, limit],
    async () => {
      const response = await apiClient.get(urlString);
      return response.data;
    }
  );
  return { data, isLoading, isFetching };
};

export default useGetTopCategories;
