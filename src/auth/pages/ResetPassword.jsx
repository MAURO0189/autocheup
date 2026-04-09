import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import FormField from "../components/FormField";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";

const FORM_FIELDS = [
  {
    id: "password",
    name: "password",
    label: "Nueva contraseña",
    type: "password",
    placeholder: "Ingresa tu nueva contraseña",
    icon: Lock,
    hint: "Al menos 8 caracteres, mayúsculas, minúsculas, números y caracteres especiales.",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    label: "Confirmar contraseña",
    type: "password",
    placeholder: "Confirma tu nueva contraseña",
    icon: Lock,
  },
];

const ResetPassword = () => {
  const {
    formData,
    message,
    messageType,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useResetPasswordForm();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-cyan-950 py-4 px-6 text-white">
              <h1 className="text-2xl font-bold">Nueva contraseña</h1>
              <p className="text-blue-100 text-sm">
                Elige una contraseña segura para tu cuenta.
              </p>
            </div>

            <div className="p-6 md:py-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col gap-5 w-full max-w-xs">
                  {FORM_FIELDS.map((field) => (
                    <FormField
                      key={field.id}
                      {...field}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  ))}
                </div>

                <div className="mt-6 w-full max-w-xs">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime-500 text-white px-4 py-2.5 rounded-lg hover:bg-lime-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? "Guardando..." : "Guardar contraseña"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {message && (
                  <p
                    className={`mt-4 text-sm text-center ${messageType === "error" ? "text-red-500" : "text-green-600"}`}
                  >
                    {message}
                  </p>
                )}

                <div className="mt-5 text-center">
                  <Link
                    to="/login"
                    className="text-sm text-lime-500 hover:text-lime-700"
                  >
                    Volver al inicio de sesión
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
