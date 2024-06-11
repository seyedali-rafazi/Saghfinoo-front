import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
} from "./userSlice";
import http from "../../../services/https";
import toast from "react-hot-toast";

interface UserData {
  phoneNumber: string;
  password: string;
}

interface SignupPayload {
  userData: UserData;
  onSuccess: () => void;
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { dispatch }) => {
    dispatch(fetchUserRequest());
    try {
      const response = await http.get(`/user/profile`);
      dispatch(fetchUserSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async ({ userData, onSuccess }: SignupPayload, { dispatch }) => {
    dispatch(signupRequest());
    try {
      const response = await http.post(`/user/get-otp`, userData);
      dispatch(signupSuccess(response.data));
      toast.success(response.data.data.message);
      onSuccess();
    } catch (error: any) {
      dispatch(signupFailure(error.message));
      toast.success(error.message);
    }
  }
);
