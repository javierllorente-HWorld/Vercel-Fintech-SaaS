"use client"

import { useState } from "react"
import { createMovimiento } from "./actions"

export function NewMovementModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg text-white font-medium transition hover:opacity-90"
        style={{ backgroundColor: "#7FA44A" }}
      >
        + Nuevo movimiento
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              Nuevo movimiento
            </h3>

            <form
              action={async (formData) => {
                await createMovimiento(formData)
                setOpen(false)
              }}
            >
              <input
                name="detalle"
                type="text"
                placeholder="Detalle"
                className="w-full mb-3 p-2 border rounded-lg"
                required
              />

              <input
                name="monto"
                type="number"
                placeholder="Monto (negativo = egreso)"
                className="w-full mb-3 p-2 border rounded-lg"
                required
              />

              <input
                name="fecha"
                type="date"
                className="w-full mb-4 p-2 border rounded-lg"
                required
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: "#7FA44A" }}
                >
                  Guardar
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  )
}