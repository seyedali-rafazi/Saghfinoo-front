import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  houseByIdFailure,
  houseByIdRequest,
  houseByIdSuccess,
} from "./productByIdSlice";
import http from "../../../services/https";

interface ParamsType {
  id: string;
}

export const fetchHouseById = createAsyncThunk(
  "user/fetchUser",
  async ({ id }: ParamsType, { dispatch }) => {
    dispatch(houseByIdRequest());
    try {
      const response = await http.get(`/product/${id}`);
      dispatch(houseByIdSuccess(response.data));
    } catch (error: any) {
      dispatch(houseByIdFailure(error.message));
    }
  }
);
