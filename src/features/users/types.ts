import { Drones } from "../drones/types";

export interface UserState {
  id: string;
  username: string;
  isLogged: boolean;
  name: string;
  orders: Drones;
  basket: Drones;
  token: string;
}

export type UsersState = UserState[];
