import { createAsyncThunk } from "@reduxjs/toolkit";
import { favouriteRequest, favouriteSuccess } from "./favourtieProductSlice";
import http from "../../../services/https";
import toast from "react-hot-toast";
import { signupFailure } from "../user/userSlice";

interface ParamsType {
  id: string;
}

export const favouriteHouse = createAsyncThunk(
  "/user/set-favorite-product",
  async ({ id }: ParamsType, { dispatch }) => {
    dispatch(favouriteRequest());
    try {
      const response = await http.post(`/user/set-favorite-product/${id}`);
      dispatch(favouriteSuccess(response.data));
      toast.success(response.data.data.message);
    } catch (error: any) {
      dispatch(signupFailure(error.message));
      toast.success(error.message);
    }
  }
);
