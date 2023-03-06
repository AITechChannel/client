import themeSlice from "./common/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../features/dashboard/redux/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    theme: themeSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
