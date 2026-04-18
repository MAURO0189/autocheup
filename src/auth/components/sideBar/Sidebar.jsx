// Sidebar.jsx
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  ShieldCheck,
  UserCircle,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = ({ navItems }) => {
  const { user, isAdmin, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const initials =
    [user?.username?.[0], user?.lastName?.[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() || "U";

  return (
    <aside
      className={`flex flex-col bg-[#0a2540] h-screen sticky top-0 transition-all duration-300 ease-in-out shrink-0 overflow-hidden border-r border-white/[0.07]
        ${collapsed ? "w-16" : "w-60"}`}
    >
      {/* Logo */}
      <div className="flex items-center px-3.5 py-4 border-b border-white/[0.08] min-h-[60px]">
        {!collapsed && (
          <span className="text-white font-semibold text-[15px] tracking-wide truncate mr-auto">
            AutoGestión
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-teal-400 hover:text-white hover:bg-white/10 rounded-md p-1 transition-colors ml-auto shrink-0"
          title={collapsed ? "Expandir" : "Colapsar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Usuario */}
      <div
        className={`flex items-center gap-2.5 px-3.5 py-3 border-b border-white/[0.08] ${collapsed ? "justify-center" : ""}`}
      >
        <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-xs font-semibold shrink-0 border border-white/15">
          {initials}
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-white text-[13px] font-medium truncate">
              {user?.username} {user?.lastName}
            </p>
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full mt-0.5
              ${isAdmin ? "bg-blue-500/15 text-blue-400" : "bg-teal-500/20 text-teal-400"}`}
            >
              <ShieldCheck className="w-2.5 h-2.5" />
              {isAdmin ? "Administrador" : (user?.role ?? "Usuario")}
            </span>
          </div>
        )}
      </div>

      {/* Navegación — flex-1 + overflow-y-auto para que nunca empuje el footer */}
      <nav
        className={`flex flex-col gap-0.5 px-2 pt-2 pb-1 flex-1 overflow-y-auto overflow-x-hidden`}
      >
        {navItems.map((item) => (
          <SidebarItem key={item.path} {...item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Footer siempre visible gracias a shrink-0 */}
      <div className="px-2 pb-2 pt-2 border-t border-white/[0.08] shrink-0">
        {!collapsed && (
          <p className="text-[11px] text-white/30 px-2.5 pb-1.5 truncate">
            {user?.email}
          </p>
        )}
        <button
          onClick={logout}
          title="Cerrar sesión"
          className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-[13.5px]
            text-white/55 hover:bg-red-500/15 hover:text-red-400 transition-colors
            ${collapsed ? "justify-center" : ""}`}
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
