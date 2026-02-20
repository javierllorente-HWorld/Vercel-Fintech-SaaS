import { DollarSign, TrendingUp, Calendar } from "lucide-react"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

function formatAmount(amount: number) {
  const formatted = `$${Math.abs(amount).toLocaleString("es-AR")}`
  return amount < 0 ? `-${formatted}` : formatted
}

export default async function MovimientosPage() {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return <div>No autorizado</div>
  }

  const operations = await sql`
    SELECT id, identificador, detalle, monto, fecha
    FROM movimientos
    WHERE user_id = ${userId}
    ORDER BY fecha DESC
  `

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
            style={{
              borderColor: "#E0C9A6",
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid #E0C9A6" }}>
                    <th className="px-6 py-4 text-left text-sm font-medium">
                      Identificador del movimiento
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium">
                      Detalle
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {operations.map((op: any, i: number) => (
                    <tr
                      key={op.id}
                      style={{
                        borderBottom:
                          i < operations.length - 1
                            ? "1px solid #E0C9A6"
                            : "none",
                      }}
                    >
                      <td className="px-6 py-5 text-sm font-semibold">
                        {op.identificador}
                      </td>
                      <td className="px-6 py-5 text-sm">
                        {op.detalle}
                      </td>
                      <td
                        className="px-6 py-5 text-sm font-bold"
                        style={{
                          color: op.monto < 0 ? "#C0392B" : "#1F1F1F",
                        }}
                      >
                        {formatAmount(op.monto)}
                      </td>
                      <td className="px-6 py-5 text-sm text-right">
                        {new Date(op.fecha).toLocaleDateString("es-AR")}
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