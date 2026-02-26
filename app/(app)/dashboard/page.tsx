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

  // ✅ CALCULAR CAJA ACTUAL
  const cajaResult = await sql`
    SELECT COALESCE(SUM(monto), 0) as total
    FROM movimientos
    WHERE user_id = ${userId}
  `

  const cajaActual = Number(cajaResult[0].total)

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
          <KpiCards cajaActual={cajaActual} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3">
            <RevenueChart />
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