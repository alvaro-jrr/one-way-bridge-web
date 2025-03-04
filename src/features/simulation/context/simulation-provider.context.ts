import { createContext } from "react";
import { NewCar } from "../models/new-car";
import { SimulationStatus } from "../models/simulation-status";

export type SimulationState = "idle" | "waiting" | "running";

interface SimulationProviderState {
  state: SimulationState;
  carId: string | null;
  simulationStatus: SimulationStatus;
  onJoinSimulation: (newCar: NewCar) => void;
}

export const SimulationProviderContext = createContext<SimulationProviderState>(
  null!,
);
