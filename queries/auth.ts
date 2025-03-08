import { useMutation } from "@tanstack/react-query";

import Auth from "@/apis/Auth";
import { AppMutationOptions } from "@/types/common";
import { LoginPayload, SignupPayload } from "@/types/requests";
import { User } from "@/types/responses";
import { useToast } from "@/components/ui/toast";
import { queryErrorHandler } from "./utils";
import { isAxiosError } from "axios";
import useAppDispatch from "@/hooks/useAppDispatch";
import { login } from "@/redux/slices";

export const useLoginMutation = ({
  onSuccess,
  onError,
}: AppMutationOptions<User> = {}) => {
  const toast = useToast();

  const dispatch = useAppDispatch();

  const mutationFn = async (loginData: LoginPayload) => {
    const response = await Auth.login(loginData);
    return response;
  };
  return useMutation({
    mutationKey: ["login"],
    mutationFn,
    onSuccess: (response) => {
      dispatch(
        login({
          ...response,
        })
      );
      onSuccess?.(response);
    },
    onError: (err) => {
      onError?.(err);
      if (isAxiosError(err)) {
        queryErrorHandler(toast, err);
      }
    },
  });
};

export const useSignupMutation = ({
  onSuccess,
  onError,
}: AppMutationOptions<User> = {}) => {
  const toast = useToast();

  const dispatch = useAppDispatch();

  const mutationFn = async (signupData: SignupPayload) => {
    const response = await Auth.signup(signupData);
    return response;
  };
  return useMutation({
    mutationKey: ["signup"],
    mutationFn,
    onSuccess: (response) => {
      dispatch(
        login({
          ...response,
        })
      );
      onSuccess?.(response);
    },
    onError: (err) => {
      onError?.(err);
      if (isAxiosError(err)) {
        queryErrorHandler(toast, err);
      }
    },
  });
};
