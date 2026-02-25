"use server"

import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

/* =========================
   DELETE MOVEMENT
========================= */
export async function deleteMovement(movementId: number) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  await sql`
    DELETE FROM movimientos
    WHERE id = ${movementId}
    AND user_id = ${userId}
  `

  revalidatePath("/movimientos")
}

/* =========================
   CREATE MOVEMENT
========================= */
export async function createMovimiento(formData: FormData) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  const detalle = formData.get("detalle") as string
  const monto = Number(formData.get("monto"))
  const fecha = formData.get("fecha") as string

  if (!detalle || !fecha || isNaN(monto)) return

  // Obtener último identificador del usuario
  const last = await sql`
    SELECT identificador
    FROM movimientos
    WHERE user_id = ${userId}
    ORDER BY id DESC
    LIMIT 1
  `

  let nextNumber = 1

  if (last.length > 0) {
    const lastId = last[0].identificador
    const number = parseInt(lastId.split("-")[1])
    if (!isNaN(number)) {
      nextNumber = number + 1
    }
  }

  const identificador = `OP-${String(nextNumber).padStart(3, "0")}`

  await sql`
    INSERT INTO movimientos (user_id, identificador, detalle, monto, fecha)
    VALUES (${userId}, ${identificador}, ${detalle}, ${monto}, ${fecha})
  `

  revalidatePath("/movimientos")
}