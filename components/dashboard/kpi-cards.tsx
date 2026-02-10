import { ClipboardList, TrendingUp, AlertCircle, Wallet, Lock } from "lucide-react"
import type { ReactNode } from "react"

interface KpiCard {
  icon: ReactNode
  label: string
  value: string
  subtitle: string
  highlight?: boolean
}

const kpiData: KpiCard[] = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    label: "Caja actual",
    value: "$ 284.500",
    subtitle: "+12% vs semana pasada",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: "Entrada hoy",
    value: "$ 47.300",
    subtitle: "Actualizado hace 5 min",
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    label: "Proximos pagos",
    value: "$ 32.100",
    subtitle: "Vence el 10 de febrero",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    label: "Prestamo disponible",
    value: "$ 350.000",
    subtitle: "Basado en tus ventas",
    highlight: true,
  },
]

export function KpiCards() {
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
          {/* Icon */}
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

          {/* Content */}
          <div>
            <p
              className="text-xs font-medium mb-1"
              style={{ color: card.highlight ? "#F3E9D7CC" : "#8B5A2B" }}
            >
              {card.label}
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: card.highlight ? "#F3E9D7" : "#1F1F1F" }}
            >
              {card.value}
            </p>
          </div>

          {/* Subtitle */}
          <p
            className="text-xs"
            style={{ color: card.highlight ? "#F3E9D7AA" : "#7FA44A" }}
          >
            {card.subtitle}
          </p>

          {/* Locked overlay for highlighted card */}
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
