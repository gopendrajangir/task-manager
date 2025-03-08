export type AppMutationOptions<T = undefined> = {
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
};
