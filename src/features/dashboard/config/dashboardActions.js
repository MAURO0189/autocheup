import { Car, Database, ChartColumn, User } from "lucide-react";

/**
 * Acciones que requieren plan activo.
 * Para agregar una nueva funcionalidad premium, solo añade aquí.
 */
export const LOCKED_ACTIONS = [
  {
    id: "consulta",
    icon: Car,
    title: "Consulta Vehicular",
    description:
      "Historial, multas, matriculación y estado legal del vehículo en segundos.",
    route: "/vehicles",
  },
  {
    id: "reclamaciones",
    icon: Database,
    title: "Reclamaciones del Vehículo",
    description:
      "Coberturas, aseguradoras y estado de pólizas para decisiones informadas.",
    route: "/my-queries",
  },
  {
    id: "analitica",
    icon: ChartColumn,
    title: "Analítica",
    description:
      "Insights combinados sobre el estado y riesgos asociados al vehículo.",
    route: "/analytics",
  },
];

/**
 * Acciones disponibles sin plan.
 */
export const FREE_ACTIONS = [
  {
    id: "perfil",
    icon: User,
    title: "Mi Perfil",
    description: "Gestiona tus datos personales y preferencias de cuenta.",
    route: "/profile",
  },
];
