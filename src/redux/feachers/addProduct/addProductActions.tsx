import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPriductFailure,
  addPriductRequest,
  addPriductSuccess,
} from "./addProductSlice";
import toast from "react-hot-toast";
import { AdQueryStringType } from "../../../context/AdQueryContext";
import { addProperty } from "../../../services/propertyService";

export const addProduct = createAsyncThunk(
  "user/addproduct",
  async (userData: AdQueryStringType, { dispatch }) => {
    dispatch(addPriductRequest());
    try {
      const newProperty = addProperty(userData);
      dispatch(addPriductSuccess({ data: { product: newProperty } }));
      toast.success("آگهی شما با موفقیت ثبت شد");
      return newProperty;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "خطا در ثبت آگهی";
      dispatch(addPriductFailure(message));
      toast.error(message);
    }
  }
);
