import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { dronesReducer } from "./drones/dronesSlice";

export const store = configureStore({
  reducer: { drones: dronesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
