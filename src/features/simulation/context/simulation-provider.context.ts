import { createContext } from "react";

interface SimulationProviderState {
  onJoinSimulation: () => void;
}

export const SimulationProviderContext = createContext<SimulationProviderState>(
  null!
);
