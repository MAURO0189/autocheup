import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-950 text-gray-300 py-6 rounded-md">
      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-500">
              Acerca de AutoCheckup
            </h3>
            <p className="mb-2 text-sm">
              AutoCheckup es una plataforma que ofrece información actualizada
              sobre vehículos, incluyendo datos del RUNT y Reclamaciones de
              vehículos.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-500">
              Enlaces Útiles
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="hover:text-lime-500">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-500">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-lime-500">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-500">
              Información de Contacto
            </h3>
            <ul className="text-sm space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                info@autocheck.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +57 1 234 5678
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-left md:text-left">
              &copy; {new Date().getFullYear()} AutoCheckup. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link
                to="#"
                className="text-gray-300 hover:text-lime-500 text-sm"
              >
                Términos de Servicio
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-lime-500 text-sm"
              >
                Política de Privacidad
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-lime-500 text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
