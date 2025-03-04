import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Car } from "../models/car";
import { useSimulation } from "../hooks/use-simulation";
import { CarIcon } from "lucide-react";
import { cn } from "~/lib/utils";

type QueueType = "bridge" | "waiting";

export function QueueStatus({
  cars,
  title,
  type,
}: {
  cars: Car[];
  title: string;
  type: QueueType;
}) {
  const { carId } = useSimulation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col divide-y-4">
        {cars.map((car) => {
          const isMyCar = carId === car.id;

          return (
            <div
              key={car.id}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <span className="flex items-center gap-2">
                <CarIcon
                  className={cn(
                    "h-6 w-6 flex-shrink-0",
                    isMyCar ? "text-zinc-800" : "text-zinc-300",
                  )}
                />

                <span className="line-clamp-1 text-ellipsis">
                  {isMyCar ? "Tú" : car.id}
                </span>
              </span>

              <span>
                {type === "waiting"
                  ? car.currentWaitingTime
                  : car.currentBridgeTime}
                s
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
