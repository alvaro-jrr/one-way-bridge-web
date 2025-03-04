import { cn } from "~/lib/utils";
import { Bridge } from "./bridge";
import { Street } from "./street";

export function Route({ className }: { className?: string }) {
  return (
    <div className={cn(className, "rounded-md bg-blue-200 py-8")}>
      <div className="grid grid-cols-3">
        <Street />

        <Bridge />

        <Street />
      </div>
    </div>
  );
}
