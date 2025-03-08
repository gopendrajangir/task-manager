export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export type GetTaskPayload = {
  id: string;
};

export type AddTaskPayload = {
  title: string;
  description: string;
};

export type UpdateTaskPayload = {
  id: string;
  title?: string;
  description?: string;
};

export type DeleteTaskPayload = {
  id: string;
};
