import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Car } from "../models/car";
import { useSimulation } from "../hooks/use-simulation";
import { ArrowLeft, ArrowRight, CarIcon } from "lucide-react";
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
  const direction = cars.length > 0 ? cars[0].direction : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{title}</span>

          {type === "bridge" && direction ? (
            direction === "left-to-right" ? (
              <ArrowRight className="h-4 w-4" />
            ) : (
              <ArrowLeft className="h-4 w-4" />
            )
          ) : null}
        </CardTitle>
      </CardHeader>

      <CardContent className="divide-y">
        {cars.map((car) => {
          const isMyCar = carId === car.id;

          return (
            <div
              key={car.id}
              className="flex items-center justify-between gap-4 py-2 text-sm"
            >
              <span className="flex items-center gap-2">
                <CarIcon
                  className={cn(
                    "h-6 w-6 flex-shrink-0",
                    isMyCar ? "text-zinc-800" : "text-zinc-400",
                  )}
                />

                <span className="line-clamp-1 text-ellipsis">
                  {isMyCar ? "Tú" : "Anónimo"}
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
