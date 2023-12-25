import axios, { AxiosError } from "axios";
import qs from "qs";

// import { openNotificationWithMessage } from "@/redux/Notification";

import { constants } from "@/constants/constants";

const useApiClient = () => {
  const baseUrl = constants.API_BASE_URL;

  const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat", skipNulls: true });
    },
  });

  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<any, any>) => {
      if (error.response?.status === 400) {
        let errorMessage = error.message;

        if (error.response?.data?.body) {
          if (typeof error.response?.data?.body === "string") {
            errorMessage = error.response?.data?.body;
          } else if (Array.isArray(error.response.data.body)) {
            errorMessage = error.response?.data?.body[0].message;
          }
        }

        // dispatch(
        //   openNotificationWithMessage({
        //     type: "error",
        //     title: "Error",
        //     description: errorMessage,
        //   })
        // );
      } else if (error.response?.status === 500) {
        // dispatch(
        //   openNotificationWithMessage({
        //     type: "error",
        //     title: "Error",
        //     description: "Something went wrong.",
        //   })
        // );
      }

      return Promise.reject(error);
    }
  );

  return apiClient;
};

export default useApiClient;
