import { Button } from "~/components/ui/button";
import { AboutDialog } from "./about-dialog";
import { JoinSimulationDialog } from "~/features/simulation/components/join-simulation-dialog";
import { useSimulation } from "~/features/simulation/hooks/use-simulation";
import { cn } from "~/lib/utils";

export function Header({ className }: { className?: string }) {
  const { state } = useSimulation();

  return (
    <header className={cn("space-y-4 md:text-center", className)}>
      <h1 className="text-3xl font-bold">One Way Bridge</h1>

      <p className="text-muted-foreground">
        Configura tu vehiculo y unete a la simulación, para que puedas ver el
        paso por el puente de una sola vía, junto a otros vehiculos
      </p>

      <div className="space-x-4">
        <JoinSimulationDialog>
          <Button disabled={state !== "idle"}>Unirme</Button>
        </JoinSimulationDialog>

        <AboutDialog>
          <Button variant="outline">Conocer más</Button>
        </AboutDialog>
      </div>
    </header>
  );
}
