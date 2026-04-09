import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Phone, CheckCircle } from "lucide-react";
import FormField from "../components/FormField";
import { useRegisterForm } from "../hooks/useRegisterForm";

const FORM_FIELDS = [
  {
    id: "username",
    name: "username",
    label: "Nombre",
    type: "text",
    placeholder: "Ingresa tu nombre",
    icon: User,
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Apellido",
    type: "text",
    placeholder: "Ingresa tu apellido",
    icon: User,
  },
  {
    id: "identificationNumber",
    name: "identificationNumber",
    label: "Número de identificación",
    type: "text",
    placeholder: "Ingresa tu número de identificación",
    icon: CheckCircle,
  },
  {
    id: "email",
    name: "email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "Ingresa tu correo electrónico",
    icon: Mail,
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    label: "Número de teléfono",
    type: "tel",
    placeholder: "Ingresa tu número de teléfono",
    icon: Phone,
  },
  {
    id: "password",
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Ingresa tu contraseña",
    icon: Lock,
    hint: "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    label: "Confirmar contraseña",
    type: "password",
    placeholder: "Confirma tu contraseña",
    icon: Lock,
  },
];

const Register = () => {
  const {
    formData,
    message,
    messageType,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useRegisterForm();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Encabezado */}
            <div className="bg-cyan-950 py-4 px-6 text-white">
              <h1 className="text-2xl font-bold">Crear cuenta</h1>
              <p className="text-blue-100">
                Regístrate para gestionar de forma rápida y segura los datos de
                los vehículos que se quieren comercializar
              </p>
            </div>

            {/* Formulario */}
            <div className="p-6 md:py-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FORM_FIELDS.map((field) => (
                    <FormField
                      key={field.id}
                      {...field}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime-500 text-white px-4 py-3 rounded-lg hover:bg-lime-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? "Registrando..." : "Registrarse"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {message && (
                <p
                  className={`mt-4 text-md text-center ${
                    messageType === "error" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="mt-6 text-center">
                <p className="text-md text-cyan-950">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    to="/login"
                    className="text-lime-500 hover:text-lime-700"
                  >
                    Inicia sesión
                  </Link>
                </p>
              </div>

              <div className="mt-8 bg-cyan-50 rounded-lg p-4 flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 mt-0.5" />
                <div className="text-sm text-cyan-800">
                  <p className="font-medium mb-1">¿Por qué registrarse?</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Acceso rápido a la información de vehículos.</li>
                    <li>Gestión personalizada de tus consultas.</li>
                    <li>Recibe alertas y actualizaciones relevantes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
