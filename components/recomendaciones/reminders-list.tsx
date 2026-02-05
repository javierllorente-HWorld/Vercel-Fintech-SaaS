"use client"

import { Check, Plus } from "lucide-react"

interface Reminder {
  id: number
  text: string
  date: string
  completed: boolean
}

export function RemindersList({ reminders }: { reminders: Reminder[] }) {
  return (
    <>
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
      {reminders.length === 0 ? (
        <div
          className="mt-8 flex flex-col items-center justify-center rounded-2xl px-6 py-16"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8" }}
        >
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: "#F5EFE3" }}
          >
            <Check className="h-6 w-6" style={{ color: "#8B5A2B" }} />
          </div>
          <p
            className="mt-4 text-base font-semibold"
            style={{ color: "#1F1F1F" }}
          >
            No hay recordatorios
          </p>
          <p className="mt-1 text-sm" style={{ color: "#8B5A2B99" }}>
            Aun no tienes pendientes registrados.
          </p>
        </div>
      ) : (
        <div
          className="mt-8 overflow-hidden rounded-2xl"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8" }}
        >
          {reminders.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-6 py-5"
              style={{
                borderBottom:
                  index < reminders.length - 1
                    ? "1px solid #F0E6D4"
                    : "none",
                backgroundColor: item.completed ? "#FAF5ED" : "transparent",
              }}
            >
              {/* Left: circle + text */}
              <div className="flex items-center gap-4">
                {item.completed ? (
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

                <div>
                  <p
                    className={`text-sm font-medium md:text-base ${item.completed ? "line-through" : ""}`}
                    style={{ color: item.completed ? "#8B5A2B99" : "#1F1F1F" }}
                  >
                    {item.text}
                  </p>
                  <p
                    className={`mt-0.5 text-xs md:text-sm ${item.completed ? "line-through" : ""}`}
                    style={{ color: "#8B5A2B99" }}
                  >
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Right: action button */}
              {item.completed ? (
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
      )}
    </>
  )
}
