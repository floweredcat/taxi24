import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./Order";

const rootReducer = combineReducers({
  order: orderSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
