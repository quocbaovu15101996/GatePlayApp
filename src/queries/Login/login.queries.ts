import { getRequestUrl } from "src/libs/api";
import * as Api from "src/libs/api";
import { request } from "src/libs/request";
import { ApiResponse, ErrorApiResponse } from "src/libs/api/type";

export const submitLogin = async (
  email: string,
  password: string,
  callbackSuccess?: (data: LoginSuccess) => void,
  callbackError?: (errMessage: string) => void
): Promise<any> => {
  const url = getRequestUrl(Api.url.login);
  const response = await request<ApiResponse<LoginSuccess> | ErrorApiResponse>(url, "POST", {
    email,
    password,
  });
  if (response.status === 200) {
    callbackSuccess?.(response.data);
  } else {
    const { data } = response as ErrorApiResponse;
    callbackError?.(data?.status?.message);
  }
};
