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
  async (userData: { phoneNumber: string; password: string }, { dispatch }) => {
    dispatch(signupRequest());
    try {
      const response = await http.post(`/user/get-otp`, userData);
      dispatch(signupSuccess(response.data));
      console.log(userData);
      toast.success(response.data.data.message);
    } catch (error: any) {
      dispatch(signupFailure(error.message));
      toast.success(error.message);
    }
  }
);
