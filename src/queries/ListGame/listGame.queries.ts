import { getRequestUrl } from "src/libs/api";
import * as Api from "src/libs/api";
import { request } from "src/libs/request";

export const fetchListGame = async (): Promise<any> => {
  const url = getRequestUrl(Api.url.listGame);
  const { data } = await request<any>(url);
  return data;
};
