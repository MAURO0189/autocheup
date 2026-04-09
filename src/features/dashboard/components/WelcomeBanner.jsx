/**
 * Muestra el saludo y el badge de plan del usuario.
 * Principio S: solo renderiza la bienvenida, no sabe de lógica de negocio.
 */
const WelcomeBanner = ({ userName, hasPlan }) => (
  <section className="bg-cyan-950 text-white py-10 px-4 md:px-6 rounded-xl">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          Bienvenido, {userName} 👋
        </h2>
        <p className="text-sm text-cyan-100/75 mt-1">
          {hasPlan
            ? "Tu plan está activo. Comienza a consultar."
            : "Plan gratuito · Activa un plan para consultar vehículos."}
        </p>
      </div>
      <span
        className={`text-xs font-semibold px-4 py-1.5 rounded-full border ${
          hasPlan
            ? "bg-lime-500/20 border-lime-400 text-lime-300"
            : "bg-white/10 border-white/20 text-white/70"
        }`}
      >
        {hasPlan ? "Plan Activo" : "Plan Gratuito"}
      </span>
    </div>
  </section>
);

export default WelcomeBanner;
