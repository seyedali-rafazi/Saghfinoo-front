import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HouseState {
  loading: boolean;
  items: any[];
  error: string | null;
  page: number;
  limit: number;
}

const initialState: HouseState = {
  loading: false,
  items: [],
  error: null,
  page: 1,
  limit: 0,
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    fetchHouseRequest(state) {
      state.loading = true;
    },
    fetchHouseSuccess(
      state,
      action: PayloadAction<{ products: any[]; total: number }>
    ) {
      state.loading = false;
      state.items = [...state.items, ...action.payload.products];
      state.limit = action.payload.total;
      state.page += 1;
      state.error = null;
    },
    fetchHouseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetHouseState(state) {
      state.items = [];
      state.page = 1;
      state.limit = 0;
    },
  },
});

export const {
  fetchHouseRequest,
  fetchHouseSuccess,
  fetchHouseFailure,
  resetHouseState,
} = houseSlice.actions;

export default houseSlice.reducer;
