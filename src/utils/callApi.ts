import nodeUrl from "url";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { isEmpty } from "@/utils/isEmpty";
import { constants } from "@/constants/constants";

type Params = {
  apiPath: string;
  method?: Method;
  queryParameters?: Record<any, any>;
  body?: Record<string, any>;
  apiKey?: string;
  authToken?: string;
};
export async function callApi<T>({
  apiPath,
  method = "GET",
  queryParameters,
  body,
  apiKey,
  authToken,
}: Params): Promise<T> {
  if (process.env.NODE_ENV === "development") {
    // console.log(
    //   `[${consoleFormatting.FgYellow}${method}${consoleFormatting.Reset}] ${apiPath}`,
    //   queryParameters ?? "[No Params]",
    //   body ?? "[No Body]"
    // );
  }

  if (queryParameters) {
    for (const [key, value] of Object.entries(queryParameters)) {
      if (isEmpty(value)) {
        delete queryParameters[key];
      }
    }
  }

  const apiBaseUrl = constants.backendApiBaseUrl;

  console.log({
    apiBaseUrl,
  });

  const url = apiPath.startsWith("http")
    ? apiPath
    : new nodeUrl.URL(`${apiBaseUrl}/${apiPath}`).href;

  console.log(url, "--->");

  const requestParams: AxiosRequestConfig = {
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      authorizationToken: process.env.API_KEY,
    },
    url,
    method: method as Method,
    params: queryParameters,
    paramsSerializer: {
      indexes: null,
    },
  };

  if (authToken) {
    requestParams.headers!.Authorization = `Bearer ${authToken}`;
  }

  if (apiKey) {
    requestParams.headers!.ApiKey = apiKey;
  }

  if (body) {
    if (method === "POST" || method === "DELETE") {
      requestParams.data = body;
    } else if (method === "PATCH") {
      const patchData = Object.keys(body).map((key) => ({
        path: key,
        op: "add",
        value: body[key],
      }));

      requestParams.data = patchData;
    }
  }

  // console.log("!!", axios.getUri(requestParams))
  return axios(requestParams)
    .then((result) => result.data)
    .catch((err: AxiosError) => {
      console.log(err.response, "errors..");
      const data = err.response?.data;
      const errorInfo: any = {
        statusCode: err.response ? err.response.status : 0,
        statusMessage: err.response ? data : "",
        body: err.response ? err.response.data : "",
        apiPath,
        method,
        url: `${process.env.API_BASE_URL}/${apiPath}`,
      };

      if (errorInfo.statusCode !== 404) {
        // log(
        //   errorInfo.statusMessage,
        //   apiPath,
        //   err.response ? errorInfo : err
        //   // {} as Request
        // );
      }

      return Promise.reject(errorInfo);
    });
}
