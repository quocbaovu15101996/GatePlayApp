export type GetRequestParams = {
  parentId?: string | number;
  partial?: string | number;
  subId?: string | number;
  action?: string | number;
};
export type ApiRequestMethods =
  | 'DELETE'
  | 'GET'
  // | 'HEAD'
  // | 'OPTIONS'
  // | 'PATCH'
  | 'POST'
  | 'PUT';

// | 'TRACE';
export interface ApiResponse<TData = any> {
  msg: string;
  status: number;
  data: TData;
}
