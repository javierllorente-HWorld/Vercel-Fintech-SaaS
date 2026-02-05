"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Lun", value: 42000 },
  { day: "Mar", value: 48000 },
  { day: "Mie", value: 44000 },
  { day: "Jue", value: 56000 },
  { day: "Vie", value: 68000 },
  { day: "Sab", value: 92000 },
  { day: "Dom", value: 58000 },
]

function formatCurrency(value: number) {
  if (value >= 1000) {
    return `$${value / 1000}k`
  }
  return `$${value}`
}

export function RevenueChart() {
  return (
    <div
      className="rounded-xl border p-6 flex flex-col"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E0B45C33" }}
    >
      <h2 className="text-base font-bold mb-6" style={{ color: "#1F1F1F" }}>
        Ingresos de esta semana
      </h2>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0B45C22" vertical />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B5A2B99", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B5A2B99", fontSize: 12 }}
              tickFormatter={formatCurrency}
              dx={-5}
              domain={[0, 100000]}
              ticks={[0, 25000, 50000, 75000, 100000]}
            />
            <Tooltip
              formatter={(value: number) => [`$ ${value.toLocaleString("es-AR")}`, "Ingresos"]}
              labelStyle={{ color: "#1F1F1F", fontWeight: 600 }}
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0B45C44",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8B5A2B"
              strokeWidth={2.5}
              dot={{ fill: "#8B5A2B", r: 4, strokeWidth: 0 }}
              activeDot={{ fill: "#8B5A2B", r: 6, strokeWidth: 2, stroke: "#F3E9D7" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
