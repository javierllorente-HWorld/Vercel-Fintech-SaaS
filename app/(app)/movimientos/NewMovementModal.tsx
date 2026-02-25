"use client"

import { useState, useTransition } from "react"
import { createMovimiento } from "./actions"

export function NewMovementModal() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      await createMovimiento(formData)
      setOpen(false)
    })
  }

  return (
    <>
      <button
        type="button"
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

            <form action={handleSubmit}>
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
                  disabled={isPending}
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: "#7FA44A" }}
                >
                  {isPending ? "Guardando..." : "Guardar"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  )
}