import { HomePage } from "./home/pages/home-page";
import { SimulationProvider } from "./simulation/context/simulation-provider";

export function App() {
  return (
    <SimulationProvider>
      <HomePage />
    </SimulationProvider>
  );
}
