import { Bridge } from "./bridge";
import { Street } from "./street";

export function Route() {
  return (
    <div className="grid flex-1 grid-cols-3 place-items-center">
      <Street />

      <Bridge />

      <Street />
    </div>
  );
}
