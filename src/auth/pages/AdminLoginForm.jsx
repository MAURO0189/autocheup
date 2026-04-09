import { useAdminLoginForm } from "../hooks/useAdminLoginForm";
import FormField from "../components/FormField";
import { Mail, Lock, ArrowRight } from "lucide-react";

const AdminLoginForm = () => {
  const {
    formData,
    message,
    messageType,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useAdminLoginForm(); // ← único cambio real

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-cyan-950 py-4 px-6 text-white">
              <h1 className="text-2xl font-bold">Acceso Administradores</h1>
              <p className="text-blue-100 text-sm">
                Ingresa tus credenciales de administrador.
              </p>
            </div>

            <div className="p-6 md:py-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col gap-5 w-full max-w-xs">
                  <FormField
                    id="email"
                    name="email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FormField
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    placeholder="********"
                    icon={Lock}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-6 w-full max-w-xs">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime-500 text-white px-4 py-2.5 rounded-lg hover:bg-lime-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {message && (
                <p
                  className={`mt-4 text-sm text-center ${messageType === "error" ? "text-red-500" : "text-green-600"}`}
                >
                  {message}
                </p>
              )}
              {/* Sin link de registro ni recuperar contraseña */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLoginForm;
