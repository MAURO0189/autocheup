import { Lock } from "lucide-react";

/**
 * Tarjeta para funciones que requieren plan activo.
 * Principio S: solo renderiza, delega el click al padre.
 * Principio O: no sabe qué pasa al hacer click (paywall, navegación, etc.).
 *
 * @param {{ icon: Component, title: string, description: string }} action
 * @param {(action) => void} onClick
 */
export const LockedActionCard = ({ action, onClick }) => {
  const Icon = action.icon;

  return (
    <div
      className="bg-white rounded-xl shadow p-6 border border-gray-100 hover:border-cyan-950/20
        hover:shadow-md transition cursor-pointer relative group"
      onClick={() => onClick(action)}
    >
      <span
        className="absolute top-3 right-3 text-xs bg-yellow-50 border border-yellow-200
        text-yellow-700 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1"
      >
        <Lock className="h-3 w-3" /> Requiere plan
      </span>

      <div className="w-10 h-10 bg-lime-50 rounded-xl flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-lime-500" />
      </div>

      <h4 className="font-bold text-cyan-950 mb-1 text-base">{action.title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {action.description}
      </p>

      <button
        className="w-full text-sm font-semibold bg-neutral-100 text-neutral-400 py-2
        rounded-lg group-hover:bg-cyan-950 group-hover:text-white transition"
      >
        Activar plan →
      </button>
    </div>
  );
};
