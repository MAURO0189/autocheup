import { Link } from "react-router-dom";
import { User } from "lucide-react";

/**
 * Botones de autenticación del navbar (Ingresar / Registrarse).
 * Aislado para que cambios de auth no afecten el resto del navbar.
 */
export function AuthButtons() {
  return (
    <div className="hidden md:flex gap-2 items-center">
      <Link
        to="/login"
        className="text-black text-base hover:text-lime-500 flex items-center transition-colors duration-200"
      >
        <User className="mr-1 h-5 w-5" />
        Iniciar sesión
      </Link>
      <Link
        to="/register"
        className="bg-lime-500 text-white px-3 py-2 rounded-md text-base font-semibold hover:bg-lime-600 transition-colors duration-200"
      >
        Registrarse
      </Link>
    </div>
  );
}
