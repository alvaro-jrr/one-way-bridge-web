import { Button } from "~/components/ui/button";
import { Route } from "~/features/simulation/components/route";
import { AboutDialog } from "../components/about-dialog";
import { JoinSimulationDialog } from "~/features/simulation/components/join-simulation-dialog";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-zinc-100 px-6 py-32">
      <header className="mx-auto w-full max-w-2xl space-y-4 md:text-center">
        <h1 className="text-3xl font-bold">One Way Bridge</h1>

        <p className="text-muted-foreground">
          Configura tu vehiculo y unete a la simulación, para que puedas ver el
          paso por el puente de una sola vía, junto a otros vehiculos
        </p>

        <div className="space-x-4">
          <JoinSimulationDialog>
            <Button>Unirse</Button>
          </JoinSimulationDialog>

          <AboutDialog>
            <Button variant="outline">Conocer más</Button>
          </AboutDialog>
        </div>
      </header>

      <section className="mt-12">
        <div className="mx-auto w-full max-w-3xl rounded-md bg-blue-200 py-8">
          <Route />
        </div>
      </section>
    </div>
  );
}
