import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const linkStyle =
  "px-3 py-2 rounded-md text-base text-black hover:text-lime-500 transition-colors duration-200 font-roboto";

/**
 * Dropdown de navegación genérico y reutilizable.
 * Se cierra automáticamente al quitar el mouse (onMouseLeave).
 *
 * @param {string}   label          - Texto del botón principal
 * @param {Array}    items          - [{ label, to }]
 * @param {boolean}  isOpen         - Si el dropdown está abierto
 * @param {Function} onToggle       - Callback al hacer click en el botón
 * @param {Function} onMouseEnter   - Callback al entrar con el mouse
 * @param {Function} onMouseLeave   - Callback al salir con el mouse
 * @param {Function} onItemClick    - Callback opcional al seleccionar un item
 */
export function NavDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        className={`${linkStyle} inline-flex items-center`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        {isOpen ? (
          <ChevronUp className="ml-1 h-5 w-5 text-black" />
        ) : (
          <ChevronDown className="ml-1 h-5 w-5 text-black" />
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg font-roboto z-20">
          {items.map(({ label: itemLabel, to }) => (
            <Link
              key={itemLabel}
              to={to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-lime-500 transition-colors duration-150"
              onClick={onItemClick}
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
