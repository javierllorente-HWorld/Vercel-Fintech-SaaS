"use server"

import { neon } from "@neondatabase/serverless"
import { cookies } from "next/headers"

const sql = neon(process.env.DATABASE_URL!)

export async function login(email: string, password: string) {
  const users = await sql`
    SELECT * FROM users WHERE email = ${email}
  `

  if (users.length === 0) {
    return { error: "Usuario no encontrado" }
  }

  const user = users[0]

  if (user.password !== password) {
    return { error: "Contraseña incorrecta" }
  }

  cookies().set("user_id", String(user.id))

  return { success: true }
}
s