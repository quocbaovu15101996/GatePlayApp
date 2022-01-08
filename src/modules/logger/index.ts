/* eslint-disable prettier/prettier */
import { Storage } from "../Storage";

export const repeat = (str: string | undefined, times: number) =>
  new Array(times + 1).join(str);

export const pad = (num: number, maxLength: number) =>
  repeat("0", maxLength - num.toString().length) + num;

export const formatTime = (time: Date): string =>
  `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(
    time.getSeconds(),
    2
  )}.${pad(time.getMilliseconds(), 3)}`;

export const requestLog = ({
  url,
  method,
  params,
  data,
  startTime,
  endTime,
  status,
  headers,
}: {
  url: string;
  method: string;
  params?: any;
  data?: any;
  status?: number;
  headers?: any;
  startTime?: number;
  endTime?: number;
}) => {
  const success = status === 200;
  const headerCSS: any[] = [
    "color: gray; font-weight: lighter;",
    `color: ${success ? "inherit" : "#F20404"};`,
    "color: gray; font-weight: lighter;",
  ];

  const title = [
    `%csend`,
    `%c${method} request to ${url}`,
    `%c@${formatTime(new Date())}`,
  ];
  if (endTime && startTime) {
    headerCSS.push("color: gray; font-weight: lighter;");
    title.push(`%c(in ${(endTime - startTime).toFixed(2)} ms)`);
  }
  //@ts-ignore
  console.groupCollapsed(title.join(" "), ...headerCSS);
  if (status) {
    console.log(
      "%cStatus: ",
      `color: ${success ? "inherit" : "#F20404"}; font-weight: bold`,
      status
    );
  }
  if (params) {
    console.log("%cParams: ", `color: '#9E9E9E'; font-weight: bold`, params);
  }
  if (Storage.accessToken) {
    console.log(
      "%cAccessToken: ",
      `color: '#9E9E9E'; font-weight: bold`,
      Storage.accessToken
    );
  }
  if (data) {
    console.log("%cResponse:", `color: #03A9F4; font-weight: bold`, data);
  }
  if (headers) {
    console.log("%cHeaders: ", `color: #4CAF50; font-weight: bold`, headers);
  }
  console.groupEnd();
};
