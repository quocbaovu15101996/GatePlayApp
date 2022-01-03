// export function getRequestUrl(
//     requestUrl: string,
//     params?: GetRequestParams,
//     queryString?: ObjectType,
//   ): string {
//     if (typeof params === 'object' && params) {
//       if (params?.parentId) {
//         requestUrl += '/' + params.parentId;
//       }
//       if (params?.partial) {
//         requestUrl += '/' + params.partial;
//       }
//       if (params?.subId) {
//         requestUrl += '/' + params.subId;
//       }
//       if (params?.action) {
//         requestUrl += '/' + params.action;
//       }
//     }
//     if (queryString && !isNullOrEmpty(queryString)) {
//       return getQueryString(requestUrl, queryString);
//     }
//     return `${API_URL}${requestUrl}`;
//   }