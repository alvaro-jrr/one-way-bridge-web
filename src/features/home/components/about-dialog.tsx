import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Dialog } from "~/components/ui/dialog";

export function AboutDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿De qué se trata este proyecto?</DialogTitle>
        </DialogHeader>

        <div className="text-muted-foreground space-y-4 text-sm">
          <p>
            La idea del proyecto del sistema distribuido en el puente de una via
            es proporcionar una solución para que los vehículos que vienen de
            diferentes direcciones crucen el puente de una via. Desarrollar un
            proceso de servidor para gestionar el uso del puente.
          </p>

          <p>
            Supongamos que los automóviles son procesos de cliente que pueden
            conectarse de forma remota al servidor en cualquier momento. En su
            programa de simulación, haga que nuevos autos se unan a la sesión de
            forma remota y cada auto intente cruzar el puente repetidamente.
          </p>

          <p>
            Deben pasar una cantidad de tiempo aleatoria en el puente y deben
            esperar un período de tiempo aleatorio antes de volver a cruzar.
            Cada cliente de automóvil puede especificar algunos parámetros como
            su velocidad, tiempo promedio de retraso después de cruzar,
            dirección de rumbo inicial, etc.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
