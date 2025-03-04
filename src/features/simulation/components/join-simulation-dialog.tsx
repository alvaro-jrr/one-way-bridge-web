import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { FormField } from "~/components/form-field";
import { RadioCard } from "~/components/radio-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Slider } from "~/components/ui/slider";
import { Direction } from "../models/direction";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useSimulation } from "../hooks/use-simulation";

export function JoinSimulationDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  // The simulation context.
  const simulation = useSimulation();

  // The car parameters.
  const [waitingTime, setWaitingTime] = useState(1);
  const [bridgeTime, setBridgeTime] = useState(1);
  const [direction, setDirection] = useState<Direction>("left-to-right");

  // The dialog open state.
  const [open, setOpen] = useState(false);

  // Handles the join simulation event.
  const onJoinSimulation = () => {
    simulation.onJoinSimulation({
      waitingTime: waitingTime,
      bridgeTime: bridgeTime,
      direction,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configura tu vehiculo</DialogTitle>

          <DialogDescription>
            Configura los parametros de tu vehiculo para que puedas unirte a la
            simulación
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();

            onJoinSimulation();

            setOpen(false);
          }}
        >
          <div className="space-y-4">
            <FormField
              id="wait-time"
              label="Tiempo de Espera (s)"
              className="space-y-4"
            >
              <div className="flex gap-4">
                <Slider
                  id="wait-time"
                  min={1}
                  max={10}
                  step={1}
                  value={[waitingTime]}
                  onValueChange={(value) => {
                    if (value.length === 0) return;

                    setWaitingTime(value[0]);
                  }}
                />

                <p className="w-8 text-center">{waitingTime}</p>
              </div>
            </FormField>

            <FormField
              id="bridge-time"
              label="Tiempo en el Puente (s)"
              className="space-y-4"
            >
              <div className="flex gap-4">
                <Slider
                  id="bridge-time"
                  min={1}
                  max={10}
                  step={1}
                  value={[bridgeTime]}
                  onValueChange={(value) => {
                    if (value.length === 0) return;

                    setBridgeTime(value[0]);
                  }}
                />

                <p className="w-8 text-center">{bridgeTime}</p>
              </div>
            </FormField>

            <FormField id="direction" label="Punto de Entrada">
              <RadioCard
                value={direction}
                options={[
                  {
                    label: "Izquierda",
                    value: "left-to-right",
                    icon: ArrowLeftIcon,
                  },
                  {
                    label: "Derecha",
                    value: "right-to-left",
                    icon: ArrowRightIcon,
                  },
                ]}
                onValueChange={(value) => {
                  setDirection(value as Direction);
                }}
              />
            </FormField>
          </div>

          <Button className="w-full" type="submit">
            Unirme
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
