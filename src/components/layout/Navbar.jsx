import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import LogoApp from "../../assets/logoApp.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const linkStyle =
    "px-3 py-2 rounded-md text-base  text-black hover:text-lime-500 transition-colors duration-200 font-roboto";

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img className="h-14 md:h-14 w-auto" src={LogoApp} alt="Logo" />

          {/* Contenedor para título y frase */}
          <div className="flex flex-col leading-tight">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-roboto font-black text-cyan-950 tracking-wider"
            >
              AUTOCHECKUP
            </Link>
            <p className="text-xs md:text-sm text-gray-500 font-medium font-roboto">
              ANALITICA VEHICULAR Y REPORTES HISTÓRICOS
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2 items-center relative">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`${linkStyle} inline-flex items-center`}
            >
              Servicios
              {openDropdown === "services" ? (
                <ChevronUp className="ml-1 h-5 w-5 text-black" />
              ) : (
                <ChevronDown className="ml-1 h-5 w-5 text-black" />
              )}
            </button>
            {openDropdown === "services" && (
              <div className="absolute mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg font-roboto">
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setOpenDropdown(null);
                  }}
                >
                  Historial Vehicular
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setOpenDropdown(null);
                  }}
                >
                  Reclamaciones
                </Link>
                {/* <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => { setOpenDropdown(null); }}
                >
                  Telemetría
                </Link> */}
              </div>
            )}
          </div>

          <Link to="#" className={linkStyle}>
            Cobertura
          </Link>
          <Link to="#" className={linkStyle}>
            Contacto
          </Link>
        </div>

        {/* Desktop Auth Links */}
        <div className="hidden md:flex gap-2 items-center">
          <>
            <Link
              to="/login"
              className="text-black text-base hover:text-lime-500 flex items-center transition-colors duration-200"
            >
              <User className="mr-1 h-5 w-5" />
              Ingresar
            </Link>
            <Link
              to="/register"
              className="bg-lime-500 text-white px-3 py-2 rounded-md text-base font-semibold hover:bg-lime-600 transition-colors duration-200"
            >
              Registrarse
            </Link>
          </>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
              className="w-full text-left rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 flex justify-between items-center"
            >
              Servicios
              <span>▾</span>
            </button>
            {openDropdown === "services" && (
              <div className="space-y-1 pl-4">
                <Link
                  to="#"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                  onClick={() => {
                    setIsOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Historial vehicular
                </Link>
                <Link
                  to="#"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                  onClick={() => {
                    setIsOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Reclamaciones
                </Link>
                {/* <Link
                  to="#"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                  onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                >
                  Telemetría
                </Link> */}
              </div>
            )}

            <Link
              to="#"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Cobertura
            </Link>
            <Link
              to="#"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>

            <>
              <Link
                to="/login"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-1 h-5 w-5" />
                Ingresar
              </Link>
              <Link
                to="/register"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-lime-500 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </Link>
            </>
          </div>
        </div>
      )}
    </nav>
  );
}
