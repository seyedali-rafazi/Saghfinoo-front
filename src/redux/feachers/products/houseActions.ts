import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchHouseFailure,
  fetchHouseRequest,
  fetchHouseSuccess,
} from "./houseSlice";
import http from "../../../services/https";

interface ParamsType {
  houseGroup?: string;
  location?: string;
  year?: string;
  sort?: string;
}

export const fetchHouses = createAsyncThunk(
  "house/fetchHouses",
  async (params: ParamsType, { dispatch, getState }) => {
    const state: any = getState();
    const { page } = state.house;

    const queryParams = new URLSearchParams();
    if (params.houseGroup) queryParams.append("houseGroup", params.houseGroup);
    if (params.location) queryParams.append("location", params.location);
    if (params.year) queryParams.append("year", params.year);
    if (params.sort) queryParams.append("sort", params.sort);

    console.log(queryParams.toString());

    dispatch(fetchHouseRequest());
    try {
      const response = await http.get(
        `/product/list?page=${page}&${queryParams.toString()}`
      );
      dispatch(fetchHouseSuccess(response.data.data));
    } catch (error: any) {
      dispatch(fetchHouseFailure(error.message));
    }
  }
);
