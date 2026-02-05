import { DashboardNavbar } from "@/components/dashboard/navbar"

export default function MovimientosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3E9D7" }}>
      <DashboardNavbar />
      <main className="px-6 py-10 lg:px-8">
        <h1 className="text-2xl font-bold" style={{ color: "#1F1F1F" }}>
          Movimientos
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#8B5A2B99" }}>
          Aqui veras el historial de movimientos de tu negocio.
        </p>
      </main>
    </div>
  )
}
