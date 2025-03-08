import { ToastDescription, Toast, useToast } from "@/components/ui/toast";
import { ErrorResponse } from "@/types/responses";
import { Ionicons } from "@expo/vector-icons";
import { AxiosError } from "axios";
import React from "react";

export const queryErrorHandler = (
  toast: ReturnType<typeof useToast>,
  err: AxiosError<ErrorResponse>
) => {
  const id = Date.now().toString();

  const { message } = err.response?.data ?? err ?? {};

  toast.show({
    id,
    placement: "top",

    duration: 3000,
    render: ({ id }) => {
      const uniqueToastId = "toast-" + id;

      return (
        <Toast
          nativeID={uniqueToastId}
          action="error"
          variant="outline"
          className="flex-row items-center h-12 px-2 py-0"
        >
          <Ionicons name="warning" color="#ff3031" size={18} />
          <ToastDescription size="lg">{message}</ToastDescription>
        </Toast>
      );
    },
  });
};
