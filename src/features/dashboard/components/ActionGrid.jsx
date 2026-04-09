import { LockedActionCard } from "./LockedActionCard";
import { FreeActionCard } from "./FreeActionCard";
import { LOCKED_ACTIONS, FREE_ACTIONS } from "../config/dashboardActions";

/**
 * Orquesta la grilla de acciones mezclando bloqueadas y libres.
 * Principio S: solo compone las tarjetas, no maneja lógica de negocio.
 * Principio O: agregar nuevas acciones = editar dashboardActions.js, no este componente.
 *
 * @param {(action) => void} onLockedClick
 * @param {(action) => void} onFreeClick
 */
const ActionGrid = ({ onLockedClick, onFreeClick }) => (
  <div>
    <h3 className="text-lg font-bold text-cyan-950 mb-4 tracking-wide">
      ¿Qué deseas hacer?
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {LOCKED_ACTIONS.map((action) => (
        <LockedActionCard
          key={action.id}
          action={action}
          onClick={onLockedClick}
        />
      ))}
      {FREE_ACTIONS.map((action) => (
        <FreeActionCard key={action.id} action={action} onClick={onFreeClick} />
      ))}
    </div>
  </div>
);

export default ActionGrid;
