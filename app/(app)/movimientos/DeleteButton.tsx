"use client"

import { useState, useTransition } from "react"
import { Trash2 } from "lucide-react"
import { deleteMovement } from "./actions"

type Props = {
  movementId: number
}

export function DeleteButton({ movementId }: Props) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      await deleteMovement(movementId)
      setOpen(false)
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-red-50 transition-colors"
      >
        <Trash2 className="w-4 h-4 text-red-600" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 w-[320px] shadow-xl">
            <h3 className="text-lg font-bold mb-3">
              Confirmar eliminación
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              ¿Seguro que querés eliminar este movimiento?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm rounded-lg border"
                disabled={isPending}
              >
                Cancelar
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700"
                disabled={isPending}
              >
                {isPending ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}