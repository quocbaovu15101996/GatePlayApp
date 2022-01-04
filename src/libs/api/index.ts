import { API_URL } from "@env";
import { isNullOrEmpty } from "src/utils/Lang";
import { GetRequestParams } from "./type";

export function getQueryString(requestUrl: string, params: ObjectType): string {
  if (typeof params === "object" && params) {
    const ret = [];
    for (const d of Object.keys(params)) {
      if (Array(params[d])) {
        const arrayparams = [];
        for (const p of params[d]) {
          arrayparams.push(`${d}[]=` + encodeURIComponent(p));
        }
        ret.push(arrayparams.join("&"));
      } else {
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(params[d]));
      }
    }

    if (ret.length > 0) {
      const retString = ret.join("&");
      if (requestUrl.includes("?")) {
        requestUrl = requestUrl + "&" + retString;
      } else {
        requestUrl = requestUrl + "?" + retString;
      }
    }
  }
  return `${API_URL}${requestUrl}`;
}

export function getRequestUrl(
  requestUrl: string,
  params?: GetRequestParams,
  queryString?: ObjectType
): string {
  if (typeof params === "object" && params) {
    if (params?.parentId) {
      requestUrl += "/" + params.parentId;
    }
    if (params?.partial) {
      requestUrl += "/" + params.partial;
    }
    if (params?.subId) {
      requestUrl += "/" + params.subId;
    }
    if (params?.action) {
      requestUrl += "/" + params.action;
    }
  }
  if (queryString && !isNullOrEmpty(queryString)) {
    return getQueryString(requestUrl, queryString);
  }
  return `${API_URL}${requestUrl}`;
}
