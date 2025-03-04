import { useContext } from "react";
import { SimulationProviderContext } from "../context/simulation-provider.context";

export function useSimulation() {
  const simulation = useContext(SimulationProviderContext);

  if (!simulation) {
    throw new Error("Simulation context not found");
  }

  return simulation;
}
