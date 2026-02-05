import { LayoutDashboard, Users, FolderOpen, BarChart3, Settings, Bell, Search, LogOut, ChevronRight } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Projects", icon: FolderOpen, active: false },
  { label: "Team", icon: Users, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
]

const recentActivity = [
  { title: "New project created", description: "Marketing Campaign Q1", time: "2 hours ago" },
  { title: "Team member added", description: "Sofia joined the design team", time: "5 hours ago" },
  { title: "Report generated", description: "Monthly analytics report", time: "1 day ago" },
  { title: "Task completed", description: "Brand guideline review", time: "2 days ago" },
]

const statCards = [
  { label: "Active Projects", value: "12", change: "+2 this week" },
  { label: "Team Members", value: "34", change: "+5 this month" },
  { label: "Tasks Completed", value: "186", change: "+24 this week" },
  { label: "Completion Rate", value: "94%", change: "+3% vs last month" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F3E9D7" }}>
      {/* Sidebar */}
      <aside
        className="hidden md:flex md:w-64 flex-col justify-between border-r"
        style={{ backgroundColor: "#5A3A1A", borderColor: "#8B5A2B" }}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6 border-b" style={{ borderColor: "#8B5A2B" }}>
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg"
              style={{ backgroundColor: "#E0B45C" }}
            >
              <span className="text-sm font-black tracking-tight" style={{ color: "#5A3A1A" }}>
                M
              </span>
            </div>
            <span className="text-lg font-bold tracking-widest" style={{ color: "#F3E9D7" }}>
              MATEO
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 px-3 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  backgroundColor: item.active ? "#8B5A2B" : "transparent",
                  color: item.active ? "#F3E9D7" : "#E0B45C",
                }}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="px-3 py-4 border-t" style={{ borderColor: "#8B5A2B" }}>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            style={{ color: "#E0B45C" }}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ backgroundColor: "#F3E9D7", borderColor: "#E0B45C33" }}
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 md:hidden">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ backgroundColor: "#E0B45C" }}
            >
              <span className="text-xs font-black tracking-tight" style={{ color: "#5A3A1A" }}>
                M
              </span>
            </div>
            <span className="text-base font-bold tracking-widest" style={{ color: "#5A3A1A" }}>
              MATEO
            </span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
            <div
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: "rgba(243,233,215,0.5)", borderColor: "#E0B45C44", color: "#8B5A2B" }}
            >
              <Search className="w-4 h-4" style={{ color: "#8B5A2B" }} />
              <span className="text-sm" style={{ color: "#8B5A2B99" }}>
                Search...
              </span>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: "#8B5A2B" }}
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#7FA44A" }}
              />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "#8B5A2B", color: "#F3E9D7" }}
            >
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#1F1F1F" }}>
              Dashboard
            </h1>
            <p className="text-sm mt-1" style={{ color: "#8B5A2B" }}>
              Welcome back, here is an overview of your workspace.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 border"
                style={{ backgroundColor: "rgba(243,233,215,0.6)", borderColor: "#E0B45C33" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#8B5A2B" }}>
                  {stat.label}
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1F1F1F" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: "#7FA44A" }}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div
              className="lg:col-span-2 rounded-xl border p-6"
              style={{ backgroundColor: "rgba(243,233,215,0.6)", borderColor: "#E0B45C33" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold" style={{ color: "#1F1F1F" }}>
                  Recent Activity
                </h2>
                <button
                  type="button"
                  className="text-xs font-medium flex items-center gap-1"
                  style={{ color: "#8B5A2B" }}
                >
                  View all <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {recentActivity.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-4 pb-4 border-b last:border-b-0 last:pb-0"
                    style={{ borderColor: "#E0B45C22" }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1F1F1F" }}>
                        {item.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#8B5A2B" }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs whitespace-nowrap" style={{ color: "#8B5A2B99" }}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className="rounded-xl border p-6"
              style={{ backgroundColor: "rgba(243,233,215,0.6)", borderColor: "#E0B45C33" }}
            >
              <h2 className="text-base font-bold mb-5" style={{ color: "#1F1F1F" }}>
                Quick Actions
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Create New Project", icon: FolderOpen },
                  { label: "Invite Team Member", icon: Users },
                  { label: "Generate Report", icon: BarChart3 },
                ].map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors border"
                    style={{
                      backgroundColor: "#8B5A2B",
                      color: "#F3E9D7",
                      borderColor: "#8B5A2B",
                    }}
                  >
                    <action.icon className="w-4 h-4" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
