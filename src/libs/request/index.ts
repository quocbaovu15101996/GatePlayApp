import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { config } from "../api/config";
import type { ApiResponse } from "../api/type";
import { APP_ID } from "@env";
import { Storage } from "src/modules/Storage";
import { requestLog } from "src/modules/logger";
import now from 'performance-now';

export async function request<TData>(
  url: string,
  method?: Method,
  data?: any,
  options?: AxiosRequestConfig,
  forkException?: boolean
): Promise<ApiResponse<TData>> {
  const headers: { [key: string]: string } = {
    "Content-Type": config.contentType,
  };
  if (Storage.accessToken) {
    headers.Authorization = "Bearer " + Storage.accessToken;
  }
  const source = axios.CancelToken.source();
  const abortTimeout = setTimeout(() => {
    source.cancel(`Timeout of ${config.timeout}ms.`);
  }, config.timeout);

//   if (url.includes("?")) {
//     url = url + "&appId=" + APP_ID + "&version=" + config.version;
//   } else {
//     url = url + "?appId=" + APP_ID + "&version=" + config.version;
//   }
  return new Promise((resolve, reject) => {
    const timeStartRequest = now();
    const requestMethod = method ?? "GET";
    axios({
      url,
      method: requestMethod,
      headers,
      data,
      cancelToken: source.token,
      ...options,
    })
      .then((response) => {
        clearTimeout(abortTimeout);
        const timeReceiveResponse = now();
        requestLog({
          url,
          method: requestMethod,
          params: data,
          data: response.data,
          startTime: timeStartRequest,
          endTime: timeReceiveResponse,
          headers: response.headers,
          status: response.status,
        });
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        const timeReceiveResponse = now();
        requestLog({
          url,
          method: requestMethod,
          params: data,
          data: error.response?.data,
          startTime: timeStartRequest,
          endTime: timeReceiveResponse,
          headers: error.response?.headers,
          status: error.response?.status,
        });
        if (forkException) {
          // @ts-ignore
          resolve({ data: undefined, status: 0, msg: error.message });
        } else {
          reject(error.response?.statusText);
        }
      });
  });
}
