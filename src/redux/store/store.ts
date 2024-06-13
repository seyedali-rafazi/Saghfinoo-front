import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feachers/user/userSlice";
import houseReducer from "../feachers/products/houseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
