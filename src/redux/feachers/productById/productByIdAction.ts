import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  houseByIdFailure,
  houseByIdRequest,
  houseByIdSuccess,
} from "./productByIdSlice";
import { getPropertyById } from "../../../services/propertyService";

interface ParamsType {
  id: string;
}

export const fetchHouseById = createAsyncThunk(
  "house/fetchHouseById",
  async ({ id }: ParamsType, { dispatch }) => {
    dispatch(houseByIdRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const product = getPropertyById(id);
      if (!product) {
        throw new Error("ملک مورد نظر یافت نشد");
      }
      dispatch(houseByIdSuccess({ data: { product } }));
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در بارگذاری ملک";
      dispatch(houseByIdFailure(message));
    }
  }
);
