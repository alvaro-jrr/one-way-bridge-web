import type { LucideIcon } from "lucide-react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface RadioCardProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
}

export function RadioCard({
  value,
  defaultValue,
  options,
  onValueChange,
}: RadioCardProps) {
  return (
    <RadioGroup
      value={value}
      defaultValue={defaultValue}
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${options.length}, 1fr)`,
      }}
      onValueChange={onValueChange}
    >
      {options.map((option) => {
        return (
          <div key={option.value} className="flex-1">
            <RadioGroupItem
              id={option.value}
              value={option.value}
              className="peer sr-only"
            />

            <Label
              htmlFor={option.value}
              className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
            >
              <option.icon className="mb-3 h-6 w-6" />

              {option.label}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
