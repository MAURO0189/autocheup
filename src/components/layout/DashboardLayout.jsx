import { Outlet } from "react-router-dom";
import Sidebar from "../../auth/components/sideBar/Sidebar";
import { useAuth } from "../../auth/hooks/useAuth";
import {
  USER_NAV,
  ADMIN_NAV,
} from "../../auth/components/sideBar/sidebarConfig";

const DashboardLayout = () => {
  const { isAdmin } = useAuth();
  const navItems = isAdmin ? ADMIN_NAV : USER_NAV;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar navItems={navItems} />
      <main className="flex-grow bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
