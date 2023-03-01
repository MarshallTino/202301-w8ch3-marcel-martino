export interface Drone {
  name: string;
  price: number;
  category: string;
  isSoldout: boolean;
  id: number;
}

export type Drones = Drone[];
