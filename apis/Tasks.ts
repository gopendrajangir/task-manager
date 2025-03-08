import {
  AddTaskPayload,
  DeleteTaskPayload,
  GetTaskPayload,
  UpdateTaskPayload,
} from "@/types/requests";
import { SuccessResponse, Task } from "@/types/responses";
import { axiosInstance } from "./Axios";

class Tasks {
  static async getAllTasks() {
    const response = await axiosInstance.get<SuccessResponse<Task[]>>("tasks");

    return response.data.data;
  }

  static async getTask(payload: GetTaskPayload) {
    const response = await axiosInstance.get<SuccessResponse<Task>>(
      `tasks/${payload.id}`
    );

    return response.data.data;
  }

  static async addTask(payload: AddTaskPayload) {
    const response = await axiosInstance.post<SuccessResponse<null>>(
      "tasks",
      payload
    );

    return response.data.data;
  }

  static async updateTask(payload: UpdateTaskPayload) {
    const taskData = {
      title: payload.title,
      description: payload.description,
    };
    
    const response = await axiosInstance.patch<SuccessResponse<Task>>(
      `tasks/${payload.id}`,
      taskData
    );

    return response.data.data;
  }

  static async deleteTask(payload: DeleteTaskPayload) {
    const response = await axiosInstance.delete<SuccessResponse<null>>(
      `tasks/${payload.id}`
    );

    return response.data.data;
  }
}

export default Tasks;
