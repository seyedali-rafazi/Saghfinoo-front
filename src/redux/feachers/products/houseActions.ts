import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchHouseFailure,
  fetchHouseRequest,
  fetchHouseSuccess,
} from "./houseSlice";
import http from "../../../services/https";

export const fetchHouses = createAsyncThunk(
  "house/fetchHouses",
  async (_, { dispatch, getState }) => {
    const state: any = getState();
    const { page } = state.house;

    dispatch(fetchHouseRequest());
    try {
      const response = await http.get(`/product/list?page=${page}`);
      dispatch(fetchHouseSuccess(response.data.data));
    } catch (error: any) {
      dispatch(fetchHouseFailure(error.message));
    }
  }
);
