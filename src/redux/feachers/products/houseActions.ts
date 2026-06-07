import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchHouseFailure,
  fetchHouseRequest,
  fetchHouseSuccess,
} from "./houseSlice";
import { listProperties } from "../../../services/propertyService";
import { ListParams } from "../../../types/property";

export const fetchHouses = createAsyncThunk(
  "house/fetchHouses",
  async (params: ListParams, { dispatch, getState }) => {
    const state: { house: { page: number } } = getState() as {
      house: { page: number };
    };
    const { page } = state.house;

    dispatch(fetchHouseRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const result = listProperties({ ...params, page });
      dispatch(fetchHouseSuccess(result));
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در بارگذاری املاک";
      dispatch(fetchHouseFailure(message));
    }
  }
);
