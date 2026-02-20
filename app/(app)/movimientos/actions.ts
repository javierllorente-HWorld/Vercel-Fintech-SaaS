"use server"

import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

export async function deleteMovement(movementId: number) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) return

  // Seguridad: solo borra si pertenece al usuario
  await sql`
    DELETE FROM movimientos
    WHERE id = ${movementId}
    AND user_id = ${userId}
  `

  // Refresca la página
  revalidatePath("/movimientos")
}