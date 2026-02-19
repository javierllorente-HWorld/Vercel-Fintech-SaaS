
import { DollarSign, TrendingUp, Calendar } from "lucide-react"

const kpis = [
  {
    label: "Total del mes",
    value: "$1,247,500",
    icon: DollarSign,
  },
  {
    label: "Promedio diario",
    value: "$62,375",
    icon: TrendingUp,
  },
  {
    label: "Dias operativos",
    value: "20 dias",
    icon: Calendar,
  },
]

const operations = [
  {
    id: "OP-027",
    detail: "Renovacion de stock de servilletas (compra x 50 mil unid.)",
    amount: 50000,
    date: "20/04",
  },
  {
    id: "OP-026",
    detail: "Pago del alquiler del negocio",
    amount: -30000,
    date: "15/04",
  },
  {
    id: "OP-025",
    detail: "Compra materias primas \u2013 Carnes Hermanos",
    amount: 65000,
    date: "10/04",
  },
  {
    id: "OP-024",
    detail: "Venta quincena 1",
    amount: 131000,
    date: "10/04",
  },
  {
    id: "OP-023",
    detail: "Compra mercaderia de limpieza - Productos SaniPro",
    amount: 42000,
    date: "05/04",
  },
  {
    id: "OP-022",
    detail: "Pago servicio de internet",
    amount: -8500,
    date: "03/04",
  },
  {
    id: "OP-021",
    detail: "Venta mostrador semanal",
    amount: 97000,
    date: "01/04",
  },
]

function formatAmount(amount: number) {
  const formatted = `$${Math.abs(amount).toLocaleString("es-AR")}`
  return amount < 0 ? `-${formatted}` : formatted
}

export default function MovimientosPage() {
  return (
    <div>

      <main className="px-6 py-10 lg:px-8 max-w-7xl mx-auto">
        {/* KPI Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border"
          style={{ borderColor: "#E0C9A6" }}
        >
          {kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              className="flex flex-col gap-4 p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRight:
                  i < kpis.length - 1 ? "1px solid #E0C9A6" : "none",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F3E9D7" }}
              >
                <kpi.icon className="h-5 w-5" style={{ color: "#5A3A1A" }} />
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#8B5A2B99" }}
                >
                  {kpi.label}
                </p>
                <p
                  className="mt-1 text-2xl font-bold"
                  style={{ color: "#1F1F1F" }}
                >
                  {kpi.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operations Table */}
        <div className="mt-10">
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "#1F1F1F" }}
          >
            Operaciones del negocio
          </h2>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "#E0C9A6", backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid #E0C9A6" }}>
                    <th
                      className="px-6 py-4 text-left text-sm font-medium"
                      style={{ color: "#8B5A2B99" }}
                    >
                      Identificador del movimiento
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-medium"
                      style={{ color: "#8B5A2B99" }}
                    >
                      Detalle
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-medium"
                      style={{ color: "#8B5A2B99" }}
                    >
                      Monto
                    </th>
                    <th
                      className="px-6 py-4 text-right text-sm font-medium"
                      style={{ color: "#8B5A2B99" }}
                    >
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {operations.map((op, i) => (
                    <tr
                      key={op.id}
                      style={{
                        borderBottom:
                          i < operations.length - 1
                            ? "1px solid #E0C9A6"
                            : "none",
                      }}
                    >
                      <td
                        className="px-6 py-5 text-sm font-semibold"
                        style={{ color: "#1F1F1F" }}
                      >
                        {op.id}
                      </td>
                      <td
                        className="px-6 py-5 text-sm"
                        style={{ color: "#1F1F1F" }}
                      >
                        {op.detail}
                      </td>
                      <td
                        className="px-6 py-5 text-sm font-bold"
                        style={{
                          color: op.amount < 0 ? "#C0392B" : "#1F1F1F",
                        }}
                      >
                        {formatAmount(op.amount)}
                      </td>
                      <td
                        className="px-6 py-5 text-sm text-right"
                        style={{ color: "#1F1F1F" }}
                      >
                        {op.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
