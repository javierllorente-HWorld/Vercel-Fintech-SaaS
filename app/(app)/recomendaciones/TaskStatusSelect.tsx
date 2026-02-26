"use client"

import { updateEstadoTarea } from "./actions"

interface Props {
  id: number
  estado: string
}

export function TaskStatusSelect({ id, estado }: Props) {
  return (
    <select
      defaultValue={estado}
      onChange={async (e) => {
        await updateEstadoTarea(id, e.target.value)
      }}
      className="px-2 py-1 rounded-md border text-sm"
    >
      <option value="pendiente">Pendiente</option>
      <option value="en_proceso">En proceso</option>
      <option value="atrasada">Atrasada</option>
      <option value="completada">Completada</option>
    </select>
  )
}