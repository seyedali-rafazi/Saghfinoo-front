import { createAsyncThunk } from "@reduxjs/toolkit";
import { favouriteRequest, favouriteSuccess } from "./favourtieProductSlice";
import {
  getMockUser,
  toggleFavorite,
} from "../../../services/propertyService";
import toast from "react-hot-toast";
import { fetchUserSuccess } from "../user/userSlice";

interface ParamsType {
  id: string;
}

export const favouriteHouse = createAsyncThunk(
  "/user/set-favorite-product",
  async ({ id }: ParamsType, { dispatch }) => {
    dispatch(favouriteRequest());
    try {
      const result = toggleFavorite(id);
      dispatch(favouriteSuccess({ data: { message: result.message } }));
      dispatch(fetchUserSuccess(getMockUser()));
      toast.success(result.message);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در ذخیره علاقه‌مندی";
      toast.error(message);
    }
  }
);
