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

interface Props {
  data: {
    mes: string
    total: number
  }[]
}

function formatCurrency(value: number) {
  if (Math.abs(value) >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`
  }
  return `$${value}`
}

function formatMonth(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR", {
    month: "short",
  })
}

export function RevenueChart({ data }: Props) {

  const formattedData = data.map((item) => ({
    mes: formatMonth(item.mes),
    total: item.total,
  }))

  return (
    <div
      className="rounded-xl border p-6 flex flex-col"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E0B45C33" }}
    >
      <h2 className="text-base font-bold mb-6" style={{ color: "#1F1F1F" }}>
        Resultado últimos 6 meses
      </h2>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={formattedData}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E0B45C22" vertical />
            <XAxis
              dataKey="mes"
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
            />
            <Tooltip
              formatter={(value: number) => [
                `$ ${value.toLocaleString("es-AR")}`,
                "Resultado",
              ]}
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
              dataKey="total"
              stroke="#8B5A2B"
              strokeWidth={2.5}
              dot={{ fill: "#8B5A2B", r: 4, strokeWidth: 0 }}
              activeDot={{
                fill: "#8B5A2B",
                r: 6,
                strokeWidth: 2,
                stroke: "#F3E9D7",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}