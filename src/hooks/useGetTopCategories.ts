import { useQuery } from "react-query";
import useApiClient from "./useApiClient";
import { constants } from "@/constants/constants";

const useGetTopCategories = () => {
  const apiClient = useApiClient();

  const { data, isLoading } = useQuery<any, Error>(
    ["get-top-category"],
    async () => {
      const response = await apiClient.get(constants.TOP_CATEGORY());
      return response.data;
    }
  );
  return { data, isLoading };
};

export default useGetTopCategories;
