import { Link } from "react-router-dom";
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import FormField from "../components/FormField";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

const ForgotPassword = () => {
  const {
    formData,
    message,
    messageType,
    isSubmitting,
    emailSent,
    handleChange,
    handleSubmit,
  } = useForgotPasswordForm();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-cyan-950 py-4 px-6 text-white">
              <h1 className="text-2xl font-bold">Recuperar contraseña</h1>
              <p className="text-blue-100 text-sm">
                Ingresa tu correo y te enviaremos un enlace para restablecer tu
                contraseña.
              </p>
            </div>

            <div className="p-6 md:py-8">
              {emailSent ? (
                // Estado de éxito — sin formulario
                <div className="flex flex-col items-center gap-4 py-4 text-center">
                  <CheckCircle className="w-12 h-12 text-lime-500" />
                  <p className="text-cyan-950 font-medium">{message}</p>
                  <p className="text-sm text-gray-500">
                    Si no ves el correo, revisa tu carpeta de spam.
                  </p>
                  <Link
                    to="/login"
                    className="text-lime-500 hover:text-lime-700 text-sm"
                  >
                    Volver al inicio de sesión
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center"
                >
                  <div className="w-full max-w-xs">
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
                  </div>

                  <div className="mt-6 w-full max-w-xs">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-lime-500 text-white px-4 py-2.5 rounded-lg hover:bg-lime-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar enlace"}
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
                      className="text-sm text-cyan-950 hover:text-lime-700 flex items-center justify-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Volver al inicio de
                      sesión
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
