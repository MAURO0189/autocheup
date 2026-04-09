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
  const handleLogout = async () => {
    await logout();
  };
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col bg-cyan-950 min-h-screen transition-all duration-300 shrink-0
        ${collapsed ? "w-16" : "w-60"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-cyan-800">
        {!collapsed && (
          <span className="text-white font-bold text-lg tracking-wide truncate">
            AutoGestión
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-cyan-300 hover:text-white transition-colors ml-auto shrink-0"
          title={collapsed ? "Expandir" : "Colapsar"}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Info usuario */}
      <div
        className={`px-3 py-4 border-b border-cyan-800 ${collapsed ? "flex justify-center" : ""}`}
      >
        {collapsed ? (
          <UserCircle className="w-7 h-7 text-cyan-300" />
        ) : (
          <div className="flex items-center gap-3">
            <UserCircle className="w-8 h-8 text-cyan-300 shrink-0" />
            <div className="overflow-hidden">
              <p className="text-white text-sm font-medium truncate">
                {user?.username} {user?.lastName}
              </p>
              <span className="inline-flex items-center gap-1 text-xs bg-cyan-800 text-cyan-200 px-2 py-0.5 rounded-full mt-0.5">
                <ShieldCheck className="w-3 h-3" />
                {isAdmin ? "Administrador" : (user?.role ?? "Usuario")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-1 px-2 pt-4 flex-grow">
        {navItems.map((item) => (
          <SidebarItem key={item.path} {...item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Logout */}
      <div className="px-2 py-4 border-t border-cyan-800">
        {!collapsed && (
          <p className="text-xs text-cyan-500 px-3 mb-2 truncate">
            {user?.email}
          </p>
        )}
        <button
          onClick={handleLogout}
          title="Cerrar sesión"
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm
            text-cyan-100 hover:bg-red-700 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
