import { KpiCards } from "@/components/dashboard/kpi-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { LoanSimulator } from "@/components/dashboard/loan-simulator"
import Link from "next/link"
import { LogOut } from "lucide-react"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return <div>No autorizado</div>
  }

  const users = await sql`
    SELECT name FROM users WHERE id = ${userId}
  `

  if (users.length === 0) {
    return <div>Usuario no encontrado</div>
  }

  const user = users[0]

  // ✅ CAJA ACTUAL
  const cajaResult = await sql`
    SELECT COALESCE(SUM(monto), 0) as total
    FROM movimientos
    WHERE user_id = ${userId}
  `
  const cajaActual = Number(cajaResult[0].total)

  // ✅ ENTRADAS DEL MES (solo ingresos)
  const entradasMesResult = await sql`
    SELECT COALESCE(SUM(monto), 0) as total
    FROM movimientos
    WHERE user_id = ${userId}
    AND monto > 0
    AND DATE_TRUNC('month', fecha) = DATE_TRUNC('month', CURRENT_DATE)
  `
  const entradasMes = Number(entradasMesResult[0].total)

  // ✅ RESULTADO DEL MES (ingresos - egresos)
  const resultadoMesResult = await sql`
    SELECT COALESCE(SUM(monto), 0) as total
    FROM movimientos
    WHERE user_id = ${userId}
    AND DATE_TRUNC('month', fecha) = DATE_TRUNC('month', CURRENT_DATE)
  `
  const resultadoMes = Number(resultadoMesResult[0].total)

  // ✅ RESULTADO ÚLTIMOS 6 MESES
  const ultimosMesesResult = await sql`
  SELECT 
    DATE_TRUNC('month', fecha) as mes,
    COALESCE(SUM(monto), 0) as total
  FROM movimientos
  WHERE user_id = ${userId}
  AND fecha >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '5 months'
  GROUP BY mes
  ORDER BY mes ASC
`

  const ultimosMeses = ultimosMesesResult.map((row: any) => ({
    mes: row.mes,
    total: Number(row.total),
  }))

  return (
    <div>
      <main className="flex-1 px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            Hola, {user.name}
          </h1>
          <p className="text-sm mt-1">
            Aqui tienes una vista rapida de la caja de tu negocio
          </p>
        </div>

        <div className="mb-6">
          <KpiCards
            cajaActual={cajaActual}
            entradasMes={entradasMes}
            resultadoMes={resultadoMes}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3">
            <RevenueChart data={ultimosMeses} />
          </div>
          <div className="lg:col-span-2">
            <LoanSimulator />
          </div>
        </div>

        <div className="flex justify-center pt-2 pb-4">
          <Link href="/" className="flex items-center gap-2 text-xs font-medium">
            <LogOut className="w-3.5 h-3.5" />
            Cerrar sesion
          </Link>
        </div>
      </main>
    </div>
  )
}