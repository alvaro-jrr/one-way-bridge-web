import { Bridge } from "./bridge";
import { Street } from "./street";

export function Route() {
  return (
    <div className="grid grid-cols-3">
      <Street />

      <Bridge />

      <Street />
    </div>
  );
}
