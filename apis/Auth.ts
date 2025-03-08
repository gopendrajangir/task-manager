import { LoginPayload, SignupPayload } from "@/types/requests";
import { SuccessResponse, User } from "@/types/responses";
import { axiosInstance } from "./Axios";

class Auth {
  static async login(data: LoginPayload) {
    const response = await axiosInstance.post<SuccessResponse<User>>(
      "auth/login",
      data
    );

    return response.data.data;
  }

  static async signup(data: SignupPayload) {
    const response = await axiosInstance.post<SuccessResponse<User>>(
      "auth/signup",
      data
    );

    return response.data.data;
  }

  static async logout(data: SignupPayload) {
    const response = await axiosInstance.patch<SuccessResponse<null>>(
      "auth/logout",
      data
    );

    return response.data.data;
  }
}

export default Auth;
