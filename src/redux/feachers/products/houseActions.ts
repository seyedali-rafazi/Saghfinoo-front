import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchHouseFailure,
  fetchHouseRequest,
  fetchHouseSuccess,
} from "./houseSlice";
import http from "../../../services/https";

export const fetchHouses = createAsyncThunk(
  "/product/list",
  async (_, { dispatch }) => {
    dispatch(fetchHouseRequest());
    try {
      const response = await http.get(`/product/list`);
      dispatch(fetchHouseSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchHouseFailure(error.message));
    }
  }
);
