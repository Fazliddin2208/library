export const BASE_URL = import.meta.env.VITE_BASE_URL!;
export const API_V1 = "/api/v1";

export const PAGE_SIZE = 20;

export interface BaseResponse<T> {
  status: boolean;
  data: T;
  errors: {msg: string}[];
}

export interface PaginatedBaseResponse<T> {
  status: boolean;
  data: {
    result: T[];
    page: number;
    pages: number;
    size: number;
    total: number;
  };
  errors: {msg: string}[];
}

export interface MutationParams<T> {
  id?: number;
  init_data?: string;
  verify?: boolean;
  onSuccess?: (data: T) => void;
  onSettled?: (data?: T) => void;
  onError?: (error: Error) => void;
}
