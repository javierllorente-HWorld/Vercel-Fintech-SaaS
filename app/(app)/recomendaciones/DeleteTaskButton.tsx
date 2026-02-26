"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { deleteTarea } from "./actions"

export function DeleteTaskButton({ id }: { id: number }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-600 hover:text-red-700 transition"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              ¿Eliminar tarea?
            </h3>

            <p className="text-sm mb-6">
              ¿Seguro que querés eliminar esta tarea?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>

              <button
                onClick={async () => {
                  await deleteTarea(id)
                  setOpen(false)
                }}
                className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}