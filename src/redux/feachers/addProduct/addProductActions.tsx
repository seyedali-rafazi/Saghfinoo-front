import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPriductFailure,
  addPriductRequest,
  addPriductSuccess,
} from "./addProductSlice";
import toast from "react-hot-toast";
import http from "../../../services/https";
import { AdQueryStringType } from "../../../context/AdQueryContext";


export const addProduct = createAsyncThunk(
  "user/addproduct",
  async (userData: AdQueryStringType, { dispatch }) => {
    dispatch(addPriductRequest());
    try {
      console.log(userData);

      const response = await http.post(`/admin/product/add`, userData);
      dispatch(addPriductSuccess(response.data));
      toast.success(response.data.data.message);
    } catch (error: any) {
      dispatch(addPriductFailure(error.message));
      toast.success(error.message);
    }
  }
);
