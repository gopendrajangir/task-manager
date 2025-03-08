import { User } from "@/types/responses";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState =
  | {
      isLoggedIn: false;
      user: null;
    }
  | {
      isLoggedIn: true;
      user: User;
    };

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState as AuthState,
  reducers: {
    login: (_state, action: PayloadAction<User>) => ({
      isLoggedIn: true,
      user: action.payload,
    }),
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
