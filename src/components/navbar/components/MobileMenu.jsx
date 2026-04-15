import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { NAV_LINKS, SERVICE_LINKS } from "../config/navLinks";

/**
 * Menú mobile expandible.
 * @param {Function} onClose        - Cierra el menú al navegar
 * @param {string}   openDropdown   - Nombre del dropdown actualmente abierto
 * @param {Function} onToggleDropdown - Alterna un dropdown por nombre
 */
export function MobileMenu({ onClose, openDropdown, onToggleDropdown }) {
  const handleItemClick = () => {
    onClose();
    onToggleDropdown(null);
  };

  return (
    <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
      <div className="px-4 py-3 space-y-1">
        {/* Links simples mobile */}
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
        {/* Servicios dropdown mobile */}
        <button
          onClick={() => onToggleDropdown("services")}
          className="w-full text-left rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 flex justify-between items-center"
          aria-expanded={openDropdown === "services"}
        >
          Buscar
          <span>{openDropdown === "services" ? "▴" : "▾"}</span>
        </button>

        {openDropdown === "services" && (
          <div className="space-y-1 pl-4">
            {SERVICE_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                onClick={handleItemClick}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Auth mobile */}
        <Link
          to="/login"
          className="flex items-center rounded-md px-3 py-2 ..."
        >
          <User className="mr-1 h-5 w-5" />
          Iniciar sesión
        </Link>
        <Link
          to="/register"
          className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
          onClick={onClose}
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
