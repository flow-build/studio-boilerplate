export interface BaseResponse<T> {
  ok: boolean;
  data?: T;
  status: number;
  message?: string;
}
