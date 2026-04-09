import { useEffect, useState } from "react";
import { Users, Car, ClipboardList, TrendingUp } from "lucide-react";
import { getUsers } from "../services/userService";

const StatCard = ({ label, value, icon: Icon, colorClass }) => (
  <div className={`rounded-xl p-5 flex items-center gap-4 ${colorClass}`}>
    {Icon && <Icon className="w-8 h-8 shrink-0" />}
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: "—",
    vehicles: "—",
    queries: "—",
    activity: "—",
  });

  useEffect(() => {
    getUsers().then(({ ok, data }) => {
      if (ok) setStats((prev) => ({ ...prev, users: data.length }));
    });
  }, []);

  const CARDS = [
    {
      label: "Usuarios registrados",
      value: stats.users,
      icon: Users,
      colorClass: "bg-cyan-50 text-cyan-700",
    },
    {
      label: "Vehículos activos",
      value: stats.vehicles,
      icon: Car,
      colorClass: "bg-lime-50 text-lime-700",
    },
    {
      label: "Consultas abiertas",
      value: stats.queries,
      icon: ClipboardList,
      colorClass: "bg-amber-50 text-amber-700",
    },
    {
      label: "Actividad mensual",
      value: stats.activity,
      icon: TrendingUp,
      colorClass: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-cyan-950">Panel de control</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Resumen general del sistema
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
