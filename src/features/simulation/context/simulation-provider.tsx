import { useEffect, useState } from "react";
import { socket } from "~/core/socket";
import {
  SimulationProviderContext,
  SimulationState,
} from "./simulation-provider.context";
import { NewCar } from "../models/new-car";
import { SimulationStatus } from "../models/simulation-status";

/** The socket simulation events. */
const events = {
  joinSimulation: "join-simulation",
  joinedSimulation: "joined-simulation",
  simulationStatus: "simulation-status",
};

/** The simulation state provider. */
export function SimulationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<SimulationState>("idle");
  const [carId, setCarId] = useState<string | null>(null);

  const [simulationStatus, setSimulationStatus] = useState<SimulationStatus>({
    bridgeQueue: [],
    leftWaitingQueue: [],
    rightWaitingQueue: [],
  });

  // Connection to the socket.
  useEffect(() => {
    // Connect to the socket.
    if (!socket.connected) socket.connect();

    /** Handles when the user joins the simulation. */
    const onJoinedSimulation = (data: unknown) => {
      setState("running");

      const carId =
        data &&
        typeof data === "object" &&
        "carId" in data &&
        data.carId &&
        typeof data.carId === "string"
          ? data.carId
          : null;

      // Save the user car id.
      setCarId(carId);
    };

    const onSimulationStatus = (data: unknown) => {
      setSimulationStatus(data as SimulationStatus);
    };

    // The events.
    socket.on(events.joinedSimulation, onJoinedSimulation);
    socket.on(events.simulationStatus, onSimulationStatus);

    return () => {
      socket.off(events.joinedSimulation);
      socket.off(events.simulationStatus);
    };
  }, []);

  /** Joins the simulation. */
  const onJoinSimulation = (newCar: NewCar) => {
    setState("waiting");

    socket.emit(events.joinSimulation, { car: newCar });
  };

  return (
    <SimulationProviderContext.Provider
      value={{ onJoinSimulation, state, carId, simulationStatus }}
    >
      {children}
    </SimulationProviderContext.Provider>
  );
}
