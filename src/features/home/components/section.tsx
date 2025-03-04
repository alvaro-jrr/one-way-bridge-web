import { cn } from "~/lib/utils";

export function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {children}
    </section>
  );
}
