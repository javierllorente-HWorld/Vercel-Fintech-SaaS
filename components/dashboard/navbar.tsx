"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const tabs = [
  { label: "Dashboard", href: "/dashboard", active: true },
  { label: "Movimientos", href: "/movimientos", active: false },
  { label: "Recomendaciones", href: "/recomendaciones", active: false },
  { label: "Credito", href: "/credito", active: false },
]

export function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: "#F3E9D7" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ backgroundColor: "#8B5A2B" }}
          >
            <span className="text-sm font-black" style={{ color: "#F3E9D7" }}>
              M
            </span>
          </div>
          <span className="text-lg font-bold tracking-wide" style={{ color: "#1F1F1F" }}>
            Mateo
          </span>
        </Link>

        {/* User info - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm font-medium" style={{ color: "#5A3A1A" }}>
            Supermercado Don Javier
          </span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#8B5A2B", color: "#F3E9D7" }}
          >
            JLL
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#5A3A1A" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Tab navigation - desktop */}
      <nav className="hidden md:flex items-center gap-6 px-6 lg:px-8 border-b" style={{ borderColor: "#E0B45C33" }}>
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className="relative pb-3 text-sm font-medium transition-colors"
            style={{ color: tab.active ? "#8B5A2B" : "#8B5A2B99" }}
          >
            {tab.label}
            {tab.active && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: "#8B5A2B" }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-1 border-b" style={{ borderColor: "#E0B45C33" }}>
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium"
              style={{
                color: tab.active ? "#F3E9D7" : "#8B5A2B",
                backgroundColor: tab.active ? "#8B5A2B" : "transparent",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {tab.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 px-3 py-2 mt-2 border-t" style={{ borderColor: "#E0B45C33" }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "#8B5A2B", color: "#F3E9D7" }}
            >
              JLL
            </div>
            <span className="text-sm font-medium" style={{ color: "#5A3A1A" }}>
              Supermercado Don Javier
            </span>
          </div>
        </nav>
      )}
    </header>
  )
}
