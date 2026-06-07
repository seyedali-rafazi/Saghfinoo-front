import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
} from "./userSlice";
import { getMockUser } from "../../../services/propertyService";
import toast from "react-hot-toast";

interface UserData {
  phoneNumber: string;
  password: string;
}

interface SignupPayload {
  userData: UserData;
  onSuccess: () => void;
}

interface UserProfileData {
  name: string;
  email: string;
}

interface CompletePayload {
  userProfileData: UserProfileData;
  onSuccess: () => void;
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { dispatch }) => {
    dispatch(fetchUserRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      dispatch(fetchUserSuccess(getMockUser()));
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در بارگذاری کاربر";
      dispatch(fetchUserFailure(message));
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async ({ userData, onSuccess }: SignupPayload, { dispatch }) => {
    dispatch(signupRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      dispatch(signupSuccess(getMockUser()));
      toast.success(`کد تأیید به شماره ${userData.phoneNumber} ارسال شد`);
      onSuccess();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "خطا در ثبت‌نام";
      dispatch(signupFailure(message));
      toast.error(message);
    }
  }
);

export const completeProfile = createAsyncThunk(
  "user/complete-profile",
  async ({ userProfileData, onSuccess }: CompletePayload, { dispatch }) => {
    dispatch(signupRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const user = getMockUser();
      user.data.user.name = userProfileData.name;
      user.data.user.email = userProfileData.email;
      dispatch(signupSuccess(user));
      toast.success("پروفایل با موفقیت تکمیل شد");
      onSuccess();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در تکمیل پروفایل";
      dispatch(signupFailure(message));
      toast.error(message);
    }
  }
);
