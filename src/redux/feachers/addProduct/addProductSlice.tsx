import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  loading: boolean;
  favouriteHouse: any | null;
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  favouriteHouse: null,
  error: null,
};

const addPriductSlice = createSlice({
  name: "favouriteHouse",
  initialState,
  reducers: {
    addPriductRequest(state) {
      state.loading = true;
    },
    addPriductSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.favouriteHouse = action.payload;
      state.error = null;
    },
    addPriductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.favouriteHouse = null;
      state.error = action.payload;
    },
  },
});

export const { addPriductRequest, addPriductSuccess, addPriductFailure } =
  addPriductSlice.actions;

export default addPriductSlice.reducer;