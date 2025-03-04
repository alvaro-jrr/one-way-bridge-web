import { Label } from "./ui/label";
import { cn } from "~/lib/utils";

export function FormField({
  id,
  label,
  children,
  className,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="font-semibold" htmlFor={id}>
        {label}
      </Label>

      {children}
    </div>
  );
}
