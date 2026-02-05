import { DashboardNavbar } from "@/components/dashboard/navbar"

export default function CreditoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3E9D7" }}>
      <DashboardNavbar />
      <main className="px-6 py-10 lg:px-8">
        <h1 className="text-2xl font-bold" style={{ color: "#1F1F1F" }}>
          Credito
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#8B5A2B99" }}>
          Aqui podras gestionar y solicitar creditos para tu negocio.
        </p>
      </main>
    </div>
  )
}
