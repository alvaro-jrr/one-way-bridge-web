import { SimulationStatus } from "~/features/simulation/components/simulation-status";
import { Header } from "../components/header";
import { Route } from "../components/route";
import { Section } from "../components/section";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-zinc-100 px-6 py-32">
      <Header className="mx-auto w-full max-w-2xl" />

      <Route className="mx-auto mt-12 w-full max-w-3xl" />

      <Section
        title="Estado de la simulación"
        className="mx-auto mt-12 w-full max-w-5xl"
      >
        <SimulationStatus />
      </Section>
    </div>
  );
}
