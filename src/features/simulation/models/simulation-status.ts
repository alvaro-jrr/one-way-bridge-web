import { Car } from "./car";

export interface SimulationStatus {
  leftWaitingQueue: Car[];
  rightWaitingQueue: Car[];
  bridgeQueue: Car[];
}
