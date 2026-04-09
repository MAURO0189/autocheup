/**
 * Renderiza las tarjetas de métricas del usuario.
 * Principio S: solo presenta estadísticas, no las calcula.
 * Los datos llegan procesados desde useDashboard.
 *
 * @param {{ label: string, value: string|number, sub: string }[]} stats
 */
const StatCards = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="bg-white rounded-xl shadow p-5 border border-gray-100"
      >
        <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
        <p className="text-3xl font-bold text-cyan-950">{stat.value}</p>
        <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
      </div>
    ))}
  </div>
);

export default StatCards;
