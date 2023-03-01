import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drones, Drone } from "./types";

const initialState: Drones = [];

const dronesSlice = createSlice({
  name: "drones",
  initialState: initialState,
  reducers: {
    loadDrones: (currentDrones, action: PayloadAction<Drones>) => [
      ...action.payload,
    ],

    setDroneSoldOut: (currentDrones, action: PayloadAction<number>) =>
      currentDrones.map((drone) => ({
        ...currentDrones,
        isSoldout: true,
        category: drone.category,
        name: drone.name,
        price: drone.price,
        id: drone.id,
      })),
    unsetSoldOut: (currentDrones, action: PayloadAction<number>) =>
      currentDrones.map((drone) => ({
        ...currentDrones,
        isSoldout: false,
        category: drone.category,
        name: drone.name,
        id: drone.id,
        price: drone.price,
      })),
    removeDrones: (currentDrones, action: PayloadAction<number>) =>
      currentDrones.filter((drone) => drone.id !== action.payload),

    addDrone: (currentDrones, action: PayloadAction<Drone>): Drone[] => [
      ...currentDrones,
      action.payload,
    ],
  },
});

export const dronesReducer = dronesSlice.reducer;
export const {
  addDrone: addDroneActionCreator,
  loadDrones: loadDronesActionCreator,
  removeDrones: removeDronesActionCreator,
  setDroneSoldOut: setDroneSoldOutActionCreator,
  unsetSoldOut: unsetSoldOutActionCreator,
} = dronesSlice.actions;
