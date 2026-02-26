import { ClipboardList, TrendingUp, BarChart3, Wallet, Lock } from "lucide-react"
import type { ReactNode } from "react"

interface KpiCard {
  icon: ReactNode
  label: string
  value: string
  subtitle: string
  highlight?: boolean
  valueColor?: string
}

interface Props {
  cajaActual: number
  entradasMes: number
  resultadoMes: number
}

export function KpiCards({ cajaActual, entradasMes, resultadoMes }: Props) {

  const resultadoColor =
    resultadoMes >= 0 ? "#16A34A" : "#DC2626"

  const kpiData: KpiCard[] = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      label: "Caja actual",
      value: `$ ${cajaActual.toLocaleString("es-AR")}`,
      subtitle: "Saldo total acumulado",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Entradas del mes",
      value: `$ ${entradasMes.toLocaleString("es-AR")}`,
      subtitle: "Ingresos del mes actual",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Resultado del mes",
      value: `$ ${resultadoMes.toLocaleString("es-AR")}`,
      subtitle:
        resultadoMes >= 0
          ? "Resultado positivo"
          : "Resultado negativo",
      valueColor: resultadoColor,
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      label: "Prestamo disponible",
      value: "$ 350.000",
      subtitle: "Basado en tus ventas",
      highlight: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((card) => (
        <div
          key={card.label}
          className="relative rounded-xl p-5 border flex flex-col gap-3 overflow-hidden"
          style={
            card.highlight
              ? { backgroundColor: "#8B5A2B", borderColor: "#8B5A2B" }
              : { backgroundColor: "#FFFFFF", borderColor: "#E0B45C33" }
          }
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={
              card.highlight
                ? { backgroundColor: "#5A3A1A", color: "#E0B45C" }
                : { backgroundColor: "#F3E9D7", color: "#8B5A2B" }
            }
          >
            {card.icon}
          </div>

          <div>
            <p
              className="text-xs font-medium mb-1"
              style={{ color: card.highlight ? "#F3E9D7CC" : "#8B5A2B" }}
            >
              {card.label}
            </p>
            <p
              className="text-2xl font-bold"
              style={{
                color: card.highlight
                  ? "#F3E9D7"
                  : card.valueColor || "#1F1F1F",
              }}
            >
              {card.value}
            </p>
          </div>

          <p
            className="text-xs"
            style={{ color: card.highlight ? "#F3E9D7AA" : "#7FA44A" }}
          >
            {card.subtitle}
          </p>

          {card.highlight && (
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl"
              style={{ backgroundColor: "rgba(90, 58, 26, 0.55)", backdropFilter: "blur(3px)" }}
            >
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" style={{ color: "#F3E9D7" }} />
                <span className="text-sm font-semibold" style={{ color: "#F3E9D7" }}>
                  Disponible proximamente
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}