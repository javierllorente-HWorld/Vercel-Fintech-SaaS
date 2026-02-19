import { neon } from "@neondatabase/serverless"
import { DashboardNavbar } from "@/components/dashboard/navbar"
import { RemindersList } from "@/components/recomendaciones/reminders-list"
import { markAsDone } from "./actions"

export default async function RecomendacionesPage() {
  const sql = neon(process.env.DATABASE_URL!)

  const rows = await sql`
    SELECT id, text, date, completed
    FROM recomendaciones
    WHERE user_id = 1
    ORDER BY date ASC
  `

  const reminders = rows.map((row) => ({
    id: row.id as number,
    text: row.text as string,
    date: new Date(row.date as string).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
    }),
    completed: row.completed as boolean,
  }))

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3E9D7" }}>

      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <RemindersList reminders={reminders} markAsDone={markAsDone} />
      </main>
    </div>
  )
}
