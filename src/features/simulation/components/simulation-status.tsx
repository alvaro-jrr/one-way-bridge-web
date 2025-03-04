import { useSimulation } from "../hooks/use-simulation";
import { QueueStatus } from "./queue-status";

export function SimulationStatus() {
  const { simulationStatus, state } = useSimulation();

  return (
    <>
      {state === "idle" ? (
        <p>No te has unido a la simulación aún.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <QueueStatus
            cars={simulationStatus.leftWaitingQueue}
            title="Izquierda"
            type="waiting"
          />

          <QueueStatus
            cars={simulationStatus.bridgeQueue}
            title="Puente"
            type="bridge"
          />

          <QueueStatus
            cars={simulationStatus.rightWaitingQueue}
            title="Derecha"
            type="waiting"
          />
        </div>
      )}
    </>
  );
}
