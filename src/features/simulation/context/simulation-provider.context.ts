import { createContext } from "react";
import { NewCar } from "../models/new-car";

interface SimulationProviderState {
  onJoinSimulation: (newCar: NewCar) => void;
}

export const SimulationProviderContext = createContext<SimulationProviderState>(
  null!,
);
