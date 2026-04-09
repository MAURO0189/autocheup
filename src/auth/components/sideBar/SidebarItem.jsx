import { NavLink } from "react-router-dom";

const SidebarItem = ({ path, label, icon: Icon, collapsed }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
       ${
         isActive ? "bg-lime-500 text-white" : "text-cyan-100 hover:bg-cyan-800"
       }`
    }
  >
    {Icon && <Icon className="w-5 h-5 shrink-0" />}
    {!collapsed && <span className="truncate">{label}</span>}
  </NavLink>
);

export default SidebarItem;
