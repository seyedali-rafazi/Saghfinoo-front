import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feachers/user/userSlice";
import houseReducer from "../feachers/products/houseSlice";
import houseByIdReducer from "../feachers/productById/productByIdSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
    houseById: houseByIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
