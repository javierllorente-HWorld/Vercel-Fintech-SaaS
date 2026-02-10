import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#5A3A1A" }}
      >
        {/* Decorative accent bar */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: "#E0B45C" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-12 text-center">
          {/* Logo Mark */}
          <div className="w-20 h-20 rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/mateo-logo.png"
              alt="MATEO logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1
              className="text-5xl font-black tracking-widest"
              style={{ color: "#F3E9D7" }}
            >
              MATEO
            </h1>
            <div
              className="w-16 h-0.5 mx-auto"
              style={{ backgroundColor: "#E0B45C" }}
            />
            <p
              className="text-lg font-light tracking-wide leading-relaxed max-w-sm"
              style={{ color: "#E0B45C" }}
            >
              Streamline your workflow. <br />
              Elevate your results.
            </p>
          </div>

          {/* Decorative dots */}
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: i === 1 ? "#E0B45C" : "#8B5A2B",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 w-full h-1"
          style={{ backgroundColor: "#E0B45C" }}
        />
      </div>

      {/* Right Panel - Login Form */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12"
        style={{ backgroundColor: "#F3E9D7" }}
      >
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <div className="w-14 h-14 rounded-xl shadow-md overflow-hidden">
              <img
                src="/mateo-logo.png"
                alt="MATEO logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1
              className="text-2xl font-black tracking-widest"
              style={{ color: "#5A3A1A" }}
            >
              MATEO
            </h1>
          </div>

          {/* Welcome Header */}
          <div className="space-y-2 text-center lg:text-left">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1F1F1F" }}
            >
              Welcome back
            </h2>
            <p
              className="text-sm"
              style={{ color: "#8B5A2B" }}
            >
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Card */}
          <div
            className="rounded-xl p-6 sm:p-8 shadow-sm border"
            style={{
              backgroundColor: "rgba(243, 233, 215, 0.6)",
              borderColor: "#E0B45C33",
            }}
          >
            <LoginForm />
          </div>

          {/* Footer */}
          <p
            className="text-center text-xs"
            style={{ color: "#8B5A2B99" }}
          >
            &copy; 2026 MATEO. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}
