/**
 * Botón hamburguesa para abrir/cerrar el menú mobile.
 * @param {Function} onClick  - Callback al hacer click
 * @param {boolean}  isOpen   - Estado actual del menú (para accesibilidad)
 */
export function MobileMenuButton({ onClick, isOpen }) {
  return (
    <button
      className="md:hidden text-gray-700 hover:text-gray-900"
      onClick={onClick}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
