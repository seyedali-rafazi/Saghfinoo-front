import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  loading: boolean;
  user: any | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },

    signupRequest(state) {
      state.loading = true;
    },
    signupSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },

    completeProfileRequest(state) {
      state.loading = true;
    },
    completeProfileSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    completeProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  completeProfileRequest,
  completeProfileSuccess,
  completeProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;
