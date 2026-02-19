"use client"

import { useState } from "react"
import { DashboardNavbar } from "@/components/dashboard/navbar"
import { Lock, TrendingUp, CheckCircle2, Clock, Info } from "lucide-react"

export default function CreditoPage() {
  const [amount, setAmount] = useState(0)
  const [term, setTerm] = useState(4)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <DashboardNavbar />

      <main className="px-4 py-8 lg:px-8 max-w-[1360px] mx-auto flex flex-col gap-6">
        {/* Credit Available Hero Banner */}
        <div
          className="rounded-2xl p-6 lg:p-8 flex items-center justify-between"
          style={{ backgroundColor: "#5A3A1A" }}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#8B5A2B" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F3E9D7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#F3E9D7" }}>
                Credito disponible
              </span>
            </div>
            <span className="text-3xl lg:text-4xl font-bold" style={{ color: "#F3E9D7" }}>
              $ 0
            </span>
            <span className="text-xs" style={{ color: "#F3E9D799" }}>
              Calculado en base a tus ultimas 8 semanas de ventas
            </span>
          </div>

          <div
            className="hidden sm:flex w-12 h-12 rounded-xl items-center justify-center"
            style={{ backgroundColor: "#8B5A2B" }}
          >
            <TrendingUp className="w-6 h-6" style={{ color: "#F3E9D7" }} />
          </div>
        </div>

        {/* Main Content: Simulator + Benefits */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Loan Simulator */}
          <div
            className="flex-1 rounded-2xl p-6 lg:p-8 flex flex-col gap-7"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0B45C33" }}
          >
            <h2 className="text-lg font-bold" style={{ color: "#1F1F1F" }}>
              Simulador de prestamo
            </h2>

            {/* Amount Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: "#5A3A1A" }}>
                  Monto a solicitar
                </span>
                <span className="text-xl lg:text-2xl font-bold" style={{ color: "#5A3A1A" }}>
                  $ {amount.toLocaleString("es-AR")}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={350000}
                step={10000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #5A3A1A ${(amount / 350000) * 100}%, #E0B45C33 ${(amount / 350000) * 100}%)`,
                  accentColor: "#5A3A1A",
                }}
                aria-label="Monto a solicitar"
              />
              <div className="flex justify-between">
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  $0
                </span>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  $350.000
                </span>
              </div>
            </div>

            {/* Term Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: "#5A3A1A" }}>
                  Plazo de pago
                </span>
                <span className="text-xl lg:text-2xl font-bold" style={{ color: "#5A3A1A" }}>
                  {term} semanas
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={16}
                step={1}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #E0B45C ${((term - 4) / 12) * 100}%, #E0B45C33 ${((term - 4) / 12) * 100}%)`,
                  accentColor: "#E0B45C",
                }}
                aria-label="Plazo de pago"
              />
              <div className="flex justify-between">
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  4 semanas
                </span>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  16 semanas
                </span>
              </div>
            </div>

            {/* Summary Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl p-4" style={{ backgroundColor: "#F3E9D7" }}>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  Pago semanal
                </span>
                <p className="text-lg font-bold mt-1" style={{ color: "#1F1F1F" }}>
                  $ 0
                </p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "#F3E9D7" }}>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  Total a pagar
                </span>
                <p className="text-lg font-bold mt-1" style={{ color: "#1F1F1F" }}>
                  $ 0
                </p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "#F3E9D7" }}>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  Tasa de interes
                </span>
                <p className="text-lg font-bold mt-1" style={{ color: "#1F1F1F" }}>
                  0%
                </p>
              </div>
            </div>

            {/* Request Button (disabled with lock) */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-not-allowed"
              style={{ backgroundColor: "#8B5A2B80", color: "#F3E9D7" }}
              onClick={() => setShowMessage(true)}
            >
              <Lock className="w-4 h-4" />
              Solicitar prestamo
            </button>

            {/* Disabled message */}
            {showMessage && (
              <div
                className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm"
                style={{ backgroundColor: "#E0B45C22", color: "#8B5A2B" }}
                role="alert"
              >
                <Info className="w-4 h-4 shrink-0" />
                Esta opcion aun no esta disponible para tu comercio.
              </div>
            )}

            {/* Info note */}
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs"
              style={{ backgroundColor: "#F3E9D7", color: "#8B5A2B99" }}
            >
              <Info className="w-4 h-4 shrink-0" />
              Los pagos se descuentan automaticamente de tus ventas diarias. No necesitas recordar fechas de pago.
            </div>
          </div>

          {/* Benefits Panel */}
          <div
            className="lg:w-[340px] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 h-fit"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0B45C33" }}
          >
            <h2 className="text-lg font-bold" style={{ color: "#1F1F1F" }}>
              Beneficios
            </h2>

            <div className="flex flex-col gap-4">
              {[
                "Aprobacion en menos de 24 horas",
                "Sin garantias ni papeleo complejo",
                "Basado en tus ventas reales",
                "Pago flexible semanal o quincenal",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#7FA44A" }} />
                  <span className="text-sm" style={{ color: "#1F1F1F" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="h-px w-full"
              style={{ backgroundColor: "#E0B45C33" }}
            />

            {/* Quick Process */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5" style={{ color: "#5A3A1A" }} />
                <span className="text-sm font-bold" style={{ color: "#1F1F1F" }}>
                  Proceso rapido
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pl-8">
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  1. Completa el formulario (2 min)
                </span>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  2. Aprobacion automatica (24h)
                </span>
                <span className="text-xs" style={{ color: "#8B5A2B99" }}>
                  3. Recibe el dinero en tu cuenta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Loan History Section */}
        <div
          className="rounded-2xl p-6 lg:p-8"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0B45C33" }}
        >
          <h2 className="text-lg font-bold" style={{ color: "#1F1F1F" }}>
            Historial de prestamos
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center py-10 gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#F3E9D7" }}
            >
              <Clock className="w-5 h-5" style={{ color: "#8B5A2B99" }} />
            </div>
            <p className="text-sm" style={{ color: "#8B5A2B99" }}>
              Aun no tienes prestamos registrados.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
