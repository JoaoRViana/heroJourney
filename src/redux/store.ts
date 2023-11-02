import { configureStore } from "@reduxjs/toolkit";
import changeTheme from './features/changeTheme'
import changeFilter from "./features/filters";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    changeTheme,
    changeFilter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector