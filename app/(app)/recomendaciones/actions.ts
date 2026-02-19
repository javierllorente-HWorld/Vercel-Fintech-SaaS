"use server"

import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"

export async function markAsDone(id: number) {
  const sql = neon(process.env.DATABASE_URL!)

  await sql`
    UPDATE recomendaciones
    SET completed = true
    WHERE id = ${id} AND user_id = 1
  `

  revalidatePath("/recomendaciones")
}
