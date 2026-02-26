import { neon } from "@neondatabase/serverless"
import { cookies } from "next/headers"
import { NewTaskModal } from "./NewTaskModal"
import { DeleteTaskButton } from "./DeleteTaskButton"

export default async function TareasPage() {
  const sql = neon(process.env.DATABASE_URL!)

  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return <div>No autorizado</div>
  }

  const rows = await sql`
    SELECT id, identificador, detalle, responsable, estado, fecha_creacion, deadline
    FROM tareas
    WHERE user_id = ${userId}
    ORDER BY deadline ASC
  `

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3E9D7" }}>
      <main className="px-6 py-10 lg:px-8 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#1F1F1F" }}>
              Tareas
            </h1>
            <p className="text-sm mt-1" style={{ color: "#8B5A2B99" }}>
              Gestión de pendientes del negocio
            </p>
          </div>

          <NewTaskModal />
        </div>

        {/* Tabla */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: "#E0C9A6",
            backgroundColor: "rgba(255,255,255,0.6)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid #E0C9A6" }}>
                  <th className="px-6 py-4 text-left text-sm font-medium">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Detalle</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Responsable</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Creación</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Deadline</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Estado</th>
                  <th className="px-6 py-4 text-right text-sm font-medium">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((tarea: any, i: number) => (
                  <tr
                    key={tarea.id}
                    style={{
                      borderBottom:
                        i < rows.length - 1
                          ? "1px solid #E0C9A6"
                          : "none",
                    }}
                  >
                    <td className="px-6 py-5 text-sm font-semibold">
                      {tarea.identificador}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      {tarea.detalle}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      {tarea.responsable}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      {new Date(tarea.fecha_creacion).toLocaleDateString("es-AR")}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      {new Date(tarea.deadline).toLocaleDateString("es-AR")}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      <select
                        defaultValue={tarea.estado}
                        className="px-2 py-1 rounded-md border text-sm"
                      >
                        <option value="pendiente">Pendiente</option>
                        <option value="en_proceso">En proceso</option>
                        <option value="atrasada">Atrasada</option>
                        <option value="completada">Completada</option>
                      </select>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <DeleteTaskButton id={tarea.id} />
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}