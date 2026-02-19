import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"
import { DashboardNavbar } from "@/components/dashboard/navbar"

const sql = neon(process.env.DATABASE_URL!)

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return <div>No autorizado</div>
  }

  const users = await sql`
    SELECT name, business_name FROM users WHERE id = ${userId}
  `

  if (users.length === 0) {
    return <div>Usuario no encontrado</div>
  }

  const user = users[0]

  return (
    <div>
      <DashboardNavbar
        businessName={user.business_name}
        userName={user.name}
      />
      <main className="flex-1">{children}</main>
    </div>
  )
}