import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #6B4420 0%, #5A3A1A 40%, #4A2E14 100%)",
        }}
      >
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,180,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(224,180,92,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft radial glow behind logo */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(224,180,92,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Decorative accent bar */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: "#E0B45C" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-12 text-center">
          {/* Logo Mark - enlarged for visual focal point */}
          <div className="w-28 h-28 rounded-2xl shadow-lg overflow-hidden">
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
              Simplifica tu trabajo. <br />
              Eleva tus resultados.
            </p>
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
              Ingresa a tu cuenta
            </h2>
            <p
              className="text-sm"
              style={{ color: "#8B5A2B" }}
            >
              Ingresa tus datos para acceder a tu cuenta
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
            &copy; 2026 MATEO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  )
}
