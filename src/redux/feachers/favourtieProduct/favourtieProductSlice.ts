import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  loading: boolean;
  favouriteHouse: any | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  favouriteHouse: null,
  error: null,
};

const favouriteSlice = createSlice({
  name: "favouriteHouse",
  initialState,
  reducers: {
    favouriteRequest(state) {
      state.loading = true;
    },
    favouriteSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.favouriteHouse = action.payload;
      state.error = null;
    },
    favouriteFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.favouriteHouse = null;
      state.error = action.payload;
    },
  },
});

export const { favouriteRequest, favouriteSuccess, favouriteFailure } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
