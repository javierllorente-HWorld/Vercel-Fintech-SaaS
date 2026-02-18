"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Lock } from "lucide-react"

const tabs = [
  { label: "Dashboard", href: "/dashboard", locked: false },
  { label: "Movimientos", href: "/movimientos", locked: false },
  { label: "recomendaciones", href: "/Recomendaciones", locked: false },
  { label: "Credito", href: "/credito", locked: true },
]

export function DashboardNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: "#F3E9D7" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img
              src="/mateo-logo.png"
              alt="MATEO logo"
              className="w-full h-full object-contain"
            />
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
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className="relative pb-3 text-sm font-medium transition-colors flex items-center gap-1.5"
              style={{ color: isActive ? "#8B5A2B" : "#8B5A2B99" }}
            >
              {tab.label}
              {tab.locked && <Lock className="w-3 h-3" style={{ color: "#8B5A2B77" }} />}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: "#8B5A2B" }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-1 border-b" style={{ borderColor: "#E0B45C33" }}>
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium"
                style={{
                  color: isActive ? "#F3E9D7" : "#8B5A2B",
                  backgroundColor: isActive ? "#8B5A2B" : "transparent",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {tab.label}
                {tab.locked && <Lock className="w-3 h-3" style={{ color: isActive ? "#F3E9D7AA" : "#8B5A2B77" }} />}
              </Link>
            )
          })}
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
