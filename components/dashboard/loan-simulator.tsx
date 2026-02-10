"use client"

import { useState } from "react"
import { ArrowRight, Lock } from "lucide-react"

const MIN_AMOUNT = 50000
const MAX_AMOUNT = 500000
const STEP = 10000
const WEEKS = 12

export function LoanSimulator() {
  const [amount, setAmount] = useState(150000)

  const weeklyPayment = Math.round(amount / WEEKS)

  return (
    <div
      className="rounded-xl border p-6 flex flex-col gap-5"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E0B45C33" }}
    >
      <h2 className="text-base font-bold" style={{ color: "#1F1F1F" }}>
        Simula tu prestamo
      </h2>

      {/* Amount display */}
      <div>
        <p className="text-xs font-medium mb-1" style={{ color: "#8B5A2B99" }}>
          Monto solicitado
        </p>
        <p className="text-2xl font-bold" style={{ color: "#1F1F1F" }}>
          $ {amount.toLocaleString("es-AR")}
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          step={STEP}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #5A3A1A ${((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100}%, #E0B45C33 ${((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100}%)`,
          }}
          aria-label="Monto del prestamo"
        />
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #5A3A1A;
            cursor: pointer;
            border: 3px solid #F3E9D7;
            box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          }
          input[type="range"]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #5A3A1A;
            cursor: pointer;
            border: 3px solid #F3E9D7;
            box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          }
        `}</style>
      </div>

      {/* Estimated payment */}
      <div
        className="rounded-lg p-4"
        style={{ backgroundColor: "#F3E9D7" }}
      >
        <p className="text-xs font-medium mb-1" style={{ color: "#8B5A2B99" }}>
          Pago semanal estimado
        </p>
        <p className="text-xl font-bold" style={{ color: "#1F1F1F" }}>
          $ {weeklyPayment.toLocaleString("es-AR")}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "#8B5A2B99" }}>
          Durante {WEEKS} semanas
        </p>
      </div>

      {/* CTA Button */}
      <div
        aria-disabled="true"
        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-semibold cursor-not-allowed select-none pointer-events-none"
        style={{ backgroundColor: "#C4A882", color: "#F3E9D7AA" }}
      >
        <Lock className="w-4 h-4" style={{ color: "#F3E9D7AA" }} />
        <span>Simular credito</span>
      </div>
    </div>
  )
}
