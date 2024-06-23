import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  loading: boolean;
  houseById: any | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  houseById: null,
  error: null,
};

const userSlice = createSlice({
  name: "houseById",
  initialState,
  reducers: {
    houseByIdRequest(state) {
      state.loading = true;
    },
    houseByIdSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.houseById = action.payload;
      state.error = null;
    },
    houseByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.houseById = null;
      state.error = action.payload;
    },
  },
});

export const { houseByIdRequest, houseByIdSuccess, houseByIdFailure } =
  userSlice.actions;

export default userSlice.reducer;
