"use server"

import { neon } from "@neondatabase/serverless"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

/* =========================
   CREAR TAREA
========================= */
export async function createTarea(formData: FormData) {
  const cookieStore = cookies()
  const userId = cookieStore.get("user_id")?.value
  if (!userId) return

  const detalle = formData.get("detalle")?.toString()
  const responsable = formData.get("responsable")?.toString() || "Sin asignar"
  const deadline = formData.get("deadline")?.toString()

  if (!detalle || !deadline) return

  await sql`
    INSERT INTO tareas (
      user_id,
      detalle,
      responsable,
      estado,
      fecha_creacion,
      deadline
    )
    VALUES (
      ${Number(userId)},
      ${detalle},
      ${responsable},
      'pendiente',
      CURRENT_DATE,
      ${deadline}
    )
  `

  revalidatePath("/recomendaciones")
}


/* =========================
   ELIMINAR TAREA
========================= */
export async function deleteTarea(id: number) {
  const cookieStore = cookies()
  const userId = cookieStore.get("user_id")?.value
  if (!userId) return

  await sql`
    DELETE FROM tareas
    WHERE id = ${id}
    AND user_id = ${Number(userId)}
  `

  revalidatePath("/recomendaciones")
}


/* =========================
   ACTUALIZAR ESTADO
========================= */
export async function updateEstadoTarea(id: number, estado: string) {
  const cookieStore = cookies()
  const userId = cookieStore.get("user_id")?.value
  if (!userId) return

  await sql`
    UPDATE tareas
    SET estado = ${estado}
    WHERE id = ${id}
    AND user_id = ${Number(userId)}
  `

  revalidatePath("/recomendaciones")
}