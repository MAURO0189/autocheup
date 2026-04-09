/**
 * Tarjeta para funciones disponibles sin plan.
 * Principio S: solo renderiza.
 *
 * @param {{ icon: Component, title: string, description: string }} action
 * @param {(action) => void} onClick
 */
export const FreeActionCard = ({ action, onClick }) => {
  const Icon = action.icon;

  return (
    <div
      className="bg-white rounded-xl shadow p-6 border border-gray-100 hover:border-cyan-950/30
        hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(action)}
    >
      <div className="w-10 h-10 bg-lime-50 rounded-xl flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-lime-500" />
      </div>

      <h4 className="font-bold text-cyan-950 mb-1 text-base">{action.title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {action.description}
      </p>

      <button
        className="w-full text-sm font-semibold bg-cyan-950 text-white py-2
        rounded-lg hover:bg-cyan-900 transition"
      >
        Ver →
      </button>
    </div>
  );
};
