import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  username: "",
  name: "",
  orders: [],
  basket: [],
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<UserState>) => ({
      ...currentUserState,
      id: action.payload.id,
      username: action.payload.username,
      isLogged: true,
      basket: action.payload.basket,
      name: action.payload.name,
      orders: action.payload.orders,
      token: action.payload.token,
    }),
    logOutUser: (currentUserState, action: PayloadAction<UserState>) => ({
      ...currentUserState,
      id: action.payload.id,

      username: action.payload.username,
      isLogged: false,
      basket: action.payload.basket,
      name: action.payload.name,
      orders: action.payload.orders,
      token: action.payload.token,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
