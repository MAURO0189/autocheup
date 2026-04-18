import { NavLink } from "react-router-dom";

const SidebarItem = ({ path, label, icon: Icon, collapsed }) => (
  <NavLink
    to={path}
    title={collapsed ? label : undefined} // ← tooltip cuando está colapsado
    className={({ isActive }) =>
      `flex items-center gap-2.5 px-2.5 py-[9px] rounded-lg text-[13.5px] font-[450] transition-colors
       ${collapsed ? "justify-center" : ""}
       ${
         isActive
           ? "bg-teal-600 text-white"
           : "text-white/65 hover:bg-white/[0.07] hover:text-white"
       }`
    }
  >
    {Icon && <Icon className="w-[18px] h-[18px] shrink-0" />}
    {!collapsed && <span className="truncate">{label}</span>}
  </NavLink>
);

export default SidebarItem;
