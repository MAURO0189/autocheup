import { useDashboard } from "../hooks/useDashboard";
import WelcomeBanner from "../components/WelcomeBanner";
import StatCards from "../components/StatCards";
import UpgradeBanner from "../components/UpgradeBanner";
import ActionGrid from "../components/ActionGrid";
import PaywallModal from "../components/PaywallModal";

/**
 * Dashboard principal post-login.
 *
 * Este componente es SOLO un orquestador:
 *  - No tiene lógica de negocio (está en useDashboard)
 *  - No tiene configuración de acciones (está en dashboardActions.js)
 *  - No tiene estilos complejos (están en cada sub-componente)
 *
 * Este componente se renderiza dentro de DashboardLayout via <Outlet />,
 * por lo que ya tiene el Sidebar incluido automáticamente.
 *
 * Ruta esperada en tu router: { path: "/dashboard", element: <Dashboard /> }
 * dentro del layout: { element: <DashboardLayout />, children: [...] }
 */
const Dashboard = () => {
  const {
    user,
    hasPlan,
    stats,
    paywallFeature,
    handleLockedAction,
    handleFreeAction,
    openPaywall,
    closePaywall,
    handleSubscribe,
  } = useDashboard();

  return (
    <div className="min-h-screen bg-neutral-50">
      <WelcomeBanner userName={user?.userName ?? "Usuario"} hasPlan={hasPlan} />

      <div className="container mx-auto px-4 md:px-6 py-10">
        <StatCards stats={stats} />

        {!hasPlan && (
          <UpgradeBanner
            onUpgradeClick={() => openPaywall({ title: "AutoCheckup Premium" })}
          />
        )}

        <ActionGrid
          onLockedClick={handleLockedAction}
          onFreeClick={handleFreeAction}
        />
      </div>

      <PaywallModal
        feature={paywallFeature}
        onClose={closePaywall}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
};

export default Dashboard;
