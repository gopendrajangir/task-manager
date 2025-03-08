import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Tasks from "@/apis/Tasks";
import { AppMutationOptions } from "@/types/common";
import {
  AddTaskPayload,
  DeleteTaskPayload,
  UpdateTaskPayload,
} from "@/types/requests";
import { Task } from "@/types/responses";
import { isAxiosError } from "axios";
import { queryErrorHandler } from "./utils";
import { useToast } from "@/components/ui/toast";

export const useGetAllTasks = () => {
  const queryFn = async () => {
    const response = await Tasks.getAllTasks();
    return response;
  };
  return useQuery({
    queryKey: ["get-all-tasks"],
    queryFn,
  });
};

export const useGetTask = (id: string) => {
  const queryFn = async () => {
    const response = await Tasks.getTask({ id });
    return response;
  };
  return useQuery({
    queryKey: ["get-task", id],
    queryFn,
  });
};

export const useAddTask = ({
  onSuccess,
  onError,
}: AppMutationOptions<null> = {}) => {
  const toast = useToast();

  const queryClient = useQueryClient();

  const mutationFn = async (addTaskData: AddTaskPayload) => {
    const response = await Tasks.addTask(addTaskData);
    return response;
  };

  return useMutation({
    mutationKey: ["add-task"],
    mutationFn,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["get-all-tasks"] });
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

export const useUpdateTask = ({
  onSuccess,
  onError,
}: AppMutationOptions<Task> = {}) => {
  const toast = useToast();

  const queryClient = useQueryClient();

  const mutationFn = async (updateTaskData: UpdateTaskPayload) => {
    const response = await Tasks.updateTask(updateTaskData);

    return response;
  };

  return useMutation({
    mutationKey: ["update-task"],
    mutationFn,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["get-task", response._id] });
      queryClient.invalidateQueries({ queryKey: ["get-all-tasks"] });
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

export const useDeleteTask = ({
  onSuccess,
  onError,
}: AppMutationOptions<null> = {}) => {
  const toast = useToast();

  const queryClient = useQueryClient();

  const mutationFn = async (deleteTaskData: DeleteTaskPayload) => {
    const response = await Tasks.deleteTask(deleteTaskData);

    return response;
  };

  return useMutation({
    mutationKey: ["delete-task"],
    mutationFn,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["get-all-tasks"] });
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
