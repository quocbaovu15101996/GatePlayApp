export type GetRequestParams = {
  parentId?: string | number;
  partial?: string | number;
  subId?: string | number;
  action?: string | number;
};
export type ApiRequestMethods =
  | "DELETE"
  | "GET"
  // | 'HEAD'
  // | 'OPTIONS'
  // | 'PATCH'
  | "POST"
  | "PUT";

// | 'TRACE';
export interface ApiResponse<TData = any> {
  status: number; // 200 | 400 | 500
  data: TData;
}

export interface ErrorApiResponse {
  status: number;
  data: {
    status: {
      code: number;
      message: string;
    };
    timestamp: string;
  };
}
