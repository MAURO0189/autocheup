import { CheckCircle2, AlertCircle } from "lucide-react";

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800
        focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent
        placeholder:text-gray-300 transition"
    />
  </div>
);

/**
 * Formulario de datos personales.
 * Recibe todo por props — no tiene estado propio.
 */
const PersonalForm = ({
  form,
  loading,
  success,
  error,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Field
        label="Nombre"
        name="firstName"
        value={form.firstName}
        onChange={onChange}
        placeholder="Juan"
        required
      />
      <Field
        label="Apellido"
        name="lastName"
        value={form.lastName}
        onChange={onChange}
        placeholder="Díaz"
        required
      />
    </div>
    <Field
      label="Correo electrónico"
      name="email"
      type="email"
      value={form.email}
      onChange={onChange}
      placeholder="juan@email.com"
      required
    />
    <Field
      label="Teléfono"
      name="phone"
      type="tel"
      value={form.phone}
      onChange={onChange}
      placeholder="+57 300 000 0000"
    />
    <Field
      label="Documento"
      name="document"
      value={form.document}
      onChange={onChange}
      placeholder="CC / NIT"
    />

    {/* Feedback */}
    {success && (
      <div className="flex items-center gap-2 text-sm text-lime-700 bg-lime-50 border border-lime-200 rounded-lg px-4 py-2.5">
        <CheckCircle2 className="w-4 h-4 shrink-0" /> Perfil actualizado
        correctamente.
      </div>
    )}
    {error && (
      <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
        <AlertCircle className="w-4 h-4 shrink-0" /> {error}
      </div>
    )}

    <button
      type="submit"
      disabled={loading}
      className="bg-cyan-950 hover:bg-cyan-900 disabled:opacity-60 text-white font-semibold
        px-6 py-2.5 rounded-lg text-sm transition flex items-center gap-2"
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {loading ? "Guardando..." : "Guardar cambios"}
    </button>
  </form>
);

export default PersonalForm;
