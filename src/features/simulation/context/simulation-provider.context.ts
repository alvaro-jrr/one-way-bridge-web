import { createContext } from "react";
import { NewCar } from "../models/new-car";

export type SimulationState = "idle" | "waiting" | "running";

interface SimulationProviderState {
  state: SimulationState;
  onJoinSimulation: (newCar: NewCar) => void;
}

export const SimulationProviderContext = createContext<SimulationProviderState>(
  null!,
);
