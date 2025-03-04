import { NewCar } from "./new-car";

export type Car = NewCar & {
  /** The current car id. */
  id: string;
  /** The current bridge time. */
  currentBridgeTime: number;
  /** The current waiting time. */
  currentWaitingTime: number;
  /** Wether the car is crossing the bridge. */
  isCrossing: boolean;
  /** Wether the car is removed from the simulation. */
  isRemoved: boolean;
};
