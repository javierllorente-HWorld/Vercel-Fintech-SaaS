"use client"

import { DashboardNavbar } from "@/components/dashboard/navbar"
import { Check, Plus } from "lucide-react"

const reminders = [
  { text: "Pagar factura de luz", date: "10 de marzo", done: false },
  { text: "Llamar a proveedor mayorista", date: "15 de marzo", done: false },
  { text: "Revisar precios de lacteos", date: "18 de marzo", done: false },
  { text: "Revisar vencimiento del stock de leche", date: "21 de marzo", done: false },
  { text: "Pagar alquiler del local", date: "1 de marzo", done: true },
  { text: "Pagar factura de internet", date: "25 de marzo", done: false },
]

export default function RecomendacionesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3E9D7" }}>
      <DashboardNavbar />

      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div>
            <h1
              className="text-2xl font-bold md:text-3xl"
              style={{ color: "#1F1F1F" }}
            >
              Recomendaciones
            </h1>
            <p className="mt-1 text-sm" style={{ color: "#8B5A2B99" }}>
              Recordatorios y pendientes de tu negocio
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#8B5A2B", color: "#F3E9D7" }}
          >
            <Plus className="h-4 w-4" />
            Agregar
          </button>
        </div>

        {/* Reminders list */}
        <div
          className="mt-8 overflow-hidden rounded-2xl"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8" }}
        >
          {reminders.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-6 py-5"
              style={{
                borderBottom:
                  index < reminders.length - 1
                    ? "1px solid #F0E6D4"
                    : "none",
                backgroundColor: item.done ? "#FAF5ED" : "transparent",
              }}
            >
              {/* Left: circle + text */}
              <div className="flex items-center gap-4">
                {/* Circle indicator */}
                {item.done ? (
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#8B5A2B" }}
                  >
                    <Check className="h-5 w-5" style={{ color: "#F3E9D7" }} />
                  </div>
                ) : (
                  <div
                    className="h-10 w-10 shrink-0 rounded-full"
                    style={{ border: "2px solid #D4C4A8" }}
                  />
                )}

                {/* Text */}
                <div>
                  <p
                    className={`text-sm font-medium md:text-base ${item.done ? "line-through" : ""}`}
                    style={{ color: item.done ? "#8B5A2B99" : "#1F1F1F" }}
                  >
                    {item.text}
                  </p>
                  <p
                    className={`mt-0.5 text-xs md:text-sm ${item.done ? "line-through" : ""}`}
                    style={{ color: "#8B5A2B99" }}
                  >
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Right: action button */}
              {item.done ? (
                <span
                  className="shrink-0 rounded-full px-5 py-2 text-xs font-medium md:text-sm"
                  style={{
                    backgroundColor: "#F0E6D4",
                    color: "#8B5A2B",
                    border: "1px solid #D4C4A8",
                  }}
                >
                  Hecho
                </span>
              ) : (
                <button
                  type="button"
                  className="flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80 md:text-sm"
                  style={{
                    backgroundColor: "#F5EFE3",
                    color: "#8B5A2B",
                    border: "1px solid #D4C4A8",
                  }}
                >
                  <Check className="h-3.5 w-3.5" />
                  Marcar como hecho
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
