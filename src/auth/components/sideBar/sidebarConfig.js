import { LayoutDashboard, Car, ClipboardList, User, Users } from "lucide-react";

export const USER_NAV = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Vehículos", path: "/vehicles", icon: Car },
  { label: "Mis consultas", path: "/my-queries", icon: ClipboardList },
  { label: "Perfil", path: "/profile", icon: User },
  { label: "Consulta RUNT", path: "/runtPage", icon: Car },
  { label: "Reclamaciones", path: "/reclamaciones", icon: ClipboardList },
];

export const ADMIN_NAV = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Usuarios", path: "/admin/users", icon: Users },
];
