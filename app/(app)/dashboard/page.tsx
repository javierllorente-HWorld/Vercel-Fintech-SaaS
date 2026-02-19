
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { LoanSimulator } from "@/components/dashboard/loan-simulator"
import Link from "next/link"
import { LogOut } from "lucide-react"


export default async function DashboardPage() {


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F3E9D7" }}>



      <main className="flex-1 px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#1F1F1F" }}>
            Hola
          </h1>
          <p className="text-sm mt-1" style={{ color: "#8B5A2B99" }}>
            Aqui tienes una vista rapida de la caja de tu negocio
          </p>
        </div>

        <div className="mb-6">
          <KpiCards />
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
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-medium transition-colors"
            style={{ color: "#8B5A2B99" }}
          >
            <LogOut className="w-3.5 h-3.5" />
            Cerrar sesion
          </Link>
        </div>
      </main>
    </div>
  )
}
