import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    startLoading: () => ({
      status: "loading",
    }),
    successLoading: (state) => ({
      ...state,
      status: "success",
    }),
    failLoading: (state) => ({
      ...state,
      status: "fail",
    }),
    setMessage: (state, action) => ({
      ...state,
      message: action.payload,
    }),
  },
});

export const orderSliceActions = orderSlice.actions;
