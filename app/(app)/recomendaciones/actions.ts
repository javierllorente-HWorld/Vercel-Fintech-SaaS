"use server"

import { neon } from "@neondatabase/serverless"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

export async function createTarea(formData: FormData) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  const detalle = formData.get("detalle") as string
  const responsable = formData.get("responsable") as string
  const deadline = formData.get("deadline") as string

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
      ${userId},
      ${detalle},
      ${responsable},
      'pendiente',
      CURRENT_DATE,
      ${deadline}
    )
  `

  revalidatePath("/recomendaciones")
}

export async function deleteTarea(id: number) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  await sql`
    DELETE FROM tareas
    WHERE id = ${id}
    AND user_id = ${userId}
  `

  revalidatePath("/recomendaciones")
}
export async function updateEstadoTarea(id: number, estado: string) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  await sql`
    UPDATE tareas
    SET estado = ${estado}
    WHERE id = ${id}
    AND user_id = ${userId}
  `

  revalidatePath("/recomendaciones")
}