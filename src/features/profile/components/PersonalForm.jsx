import { ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  ...rest
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label} {required && <span className="text-red-400">*</span>}
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
      {...rest}
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-gray-200
          text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-lime-400
          focus:border-transparent transition"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const PersonalForm = ({
  form,
  loading,
  success,
  error,
  onChange,
  onSubmit,
  OCCUPATIONS,
  HOW_DID_YOU_FIND_US,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {/* ── Datos de contacto ── */}
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

    {/* ── Divider ── */}
    <div className="pt-2 pb-1 border-t border-gray-100">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
        Información adicional
      </p>
    </div>

    {/* ── Campos HU-1 ── */}
    <Field
      label="Fecha de nacimiento"
      name="birthDate"
      type="date"
      value={form.birthDate}
      onChange={onChange}
      min="1900-01-01"
      max={
        new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          .toISOString()
          .split("T")[0]
      }
      required
    />

    <SelectField
      label="Ocupación"
      name="occupation"
      value={form.occupation}
      onChange={onChange}
      options={OCCUPATIONS}
      placeholder="Selecciona tu ocupación"
      required
    />

    {/* Campo "Otros" — aparece solo si aplica */}
    {form.occupation === "Otros" && (
      <Field
        label="Especifica tu ocupación"
        name="otherOccupation"
        value={form.otherOccupation}
        onChange={onChange}
        placeholder="Describe tu ocupación"
        required
        autoFocus
      />
    )}

    <SelectField
      label="¿Cómo nos conociste?"
      name="howDidYouFindUs"
      value={form.howDidYouFindUs}
      onChange={onChange}
      options={HOW_DID_YOU_FIND_US}
      placeholder="Selecciona una opción"
      required
    />

    {/* ── Feedback ── */}
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
