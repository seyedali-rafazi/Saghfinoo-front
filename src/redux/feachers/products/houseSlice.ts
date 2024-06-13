import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HouseState {
  loading: boolean;
  house: any | null;
  error: string | null;
}

const initialState: HouseState = {
  loading: false,
  house: null,
  error: null,
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    fetchHouseRequest(state) {
      state.loading = true;
    },
    fetchHouseSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.house = action.payload;
      state.error = null;
    },
    fetchHouseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.house = null;
      state.error = action.payload;
    },
  },
});

export const { fetchHouseRequest, fetchHouseSuccess, fetchHouseFailure } =
  houseSlice.actions;

export default houseSlice.reducer;
