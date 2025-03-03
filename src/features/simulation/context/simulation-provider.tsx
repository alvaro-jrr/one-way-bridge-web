import { useEffect } from "react";
import { socket } from "~/core/socket";
import { SimulationProviderContext } from "./simulation-provider.context";

/** The socket simulation events. */
const events = {
  joinSimulation: "join-simulation",
};

/** The simulation state provider. */
export function SimulationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Connection to the socket.
  useEffect(() => {
    socket.connect();

    return () => {
      // Disconnect from the socket when the component unmounts.
      socket.disconnect();
    };
  }, []);

  /** Joins the simulation. */
  const onJoinSimulation = () => {
    socket.emit(events.joinSimulation, {});
  };

  return (
    <SimulationProviderContext.Provider value={{ onJoinSimulation }}>
      {children}
    </SimulationProviderContext.Provider>
  );
}
