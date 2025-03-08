export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ErrorResponse = {
  success: false;
  message: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  token: string;
};

export type Task = {
  _id: string;
  title: string;
  description: string;
};
