import { useEffect, useState } from "react";
import { socket } from "~/core/socket";
import {
  SimulationProviderContext,
  SimulationState,
} from "./simulation-provider.context";
import { NewCar } from "../models/new-car";

/** The socket simulation events. */
const events = {
  joinSimulation: "join-simulation",
  joinedSimulation: "joined-simulation",
};

/** The simulation state provider. */
export function SimulationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<SimulationState>("idle");

  // Connection to the socket.
  useEffect(() => {
    socket.connect();

    return () => {
      // Disconnect from the socket when the component unmounts.
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    /** Handles when the user joins the simulation. */
    const onJoinedSimulation = () => {
      setState("running");
    };

    // The events.
    socket.on(events.joinedSimulation, onJoinedSimulation);

    return () => {
      socket.off(events.joinedSimulation);
    };
  }, []);

  /** Joins the simulation. */
  const onJoinSimulation = (newCar: NewCar) => {
    setState("waiting");

    socket.emit(events.joinSimulation, { car: newCar });
  };

  return (
    <SimulationProviderContext.Provider value={{ onJoinSimulation, state }}>
      {children}
    </SimulationProviderContext.Provider>
  );
}
