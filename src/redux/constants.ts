export type ErrorMessageT = {
  property?: string;
  message?: string;
};

export type ReturnSuccessType<T> = {
  [key : string]: T;
};

export type ReturnErrorType = {
  error: string;
  message: ErrorMessageT[] | [];
  status: number;
};
export type ErrorType = {
  error: string;
  status: string;
};
