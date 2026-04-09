import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth";

/**
 * Encapsula TODA la lógica del dashboard.
 * El componente Dashboard.jsx solo llama este hook y renderiza.
 *
 * Principio S: la lógica no vive en el componente visual.
 * Principio D: el componente depende de esta abstracción, no de useAuth directamente.
 */
export const useDashboard = () => {
  const { user } = useAuth();
  const defaultUser = {
    plan: "free",
    consultasDisponibles: 0,
    vehiculosGuardados: 0,
    reportesGenerados: 0,
  };
  const effectiveUser = user || defaultUser;

  const navigate = useNavigate();
  const [paywallFeature, setPaywallFeature] = useState(null);

  // Derivar si tiene plan activo desde el usuario
  // Ajusta el campo según tu modelo de datos real
  const hasPlan = effectiveUser?.plan && effectiveUser.plan !== "free";

  const stats = [
    {
      label: "Consultas disponibles",
      value: hasPlan ? (effectiveUser?.consultasDisponibles ?? 0) : "—",
      sub: hasPlan ? "Este mes" : "Activa un plan",
    },
    {
      label: "Vehículos guardados",
      value: user?.vehiculosGuardados ?? 0,
      sub: "En tu cuenta",
    },
    {
      label: "Reportes generados",
      value: hasPlan ? (user?.reportesGenerados ?? 0) : "—",
      sub: hasPlan ? "Total" : "Disponible en plan",
    },
  ];

  /**
   * Maneja el click en una acción bloqueada.
   * Si tiene plan: navega. Si no: abre el paywall.
   */
  const handleLockedAction = (action) => {
    if (hasPlan) {
      navigate(action.route);
    } else {
      setPaywallFeature(action);
    }
  };

  const handleFreeAction = (action) => {
    navigate(action.route);
  };

  const openPaywall = (feature) => setPaywallFeature(feature);
  const closePaywall = () => setPaywallFeature(null);

  const handleSubscribe = () => {
    closePaywall();
    navigate("/subscription"); // ajusta a tu ruta de pago
  };

  return {
    user,
    hasPlan,
    stats,
    paywallFeature,
    handleLockedAction,
    handleFreeAction,
    openPaywall,
    closePaywall,
    handleSubscribe,
  };
};
