import {
  Car,
  Database,
  ChartColumn,
  Shield,
  FileText,
  Bell,
  TrendingUp,
  Download,
  Headphones,
} from "lucide-react";

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Consulta Vehicular",
    description:
      "Accede al historial y estado legal del vehículo. Verifica multas, matriculación y más en segundos.",
    cta: "Comenzar ahora",
    to: "/register",
  },
  {
    id: 2,
    title: "Reclamaciones",
    description:
      "Comprueba coberturas, aseguradoras y el estado de las pólizas para tomar decisiones informadas.",
    cta: "Ver planes",
    to: "/register",
  },
  {
    id: 3,
    title: "Analítica avanzada",
    description:
      "Combina consultas vehiculares con reclamaciones para obtener insights claros sobre riesgos asociados.",
    cta: "Explorar",
    to: "/register",
  },
];

export const FEATURES = [
  {
    id: 1,
    icon: Car,
    title: "Consulta Vehicular",
    description:
      "Accede al historial y estado legal del vehículo, verifica multas, matriculación y más en segundos.",
  },
  {
    id: 2,
    icon: Database,
    title: "Reclamaciones del Vehículo",
    description:
      "Comprueba coberturas, aseguradoras y el estado de las pólizas para entender el riesgo.",
  },
  {
    id: 3,
    icon: ChartColumn,
    title: "Analítica",
    description:
      "Combina la consulta vehicular con las reclamaciones para obtener insights claros sobre riesgos.",
  },
];

export const PREMIUM_FEATURES = [
  {
    id: 1,
    icon: Shield,
    title: "Consultas Ilimitadas",
    description:
      "Realiza consultas ilimitadas al RUNT, Fasecolda y telemetría sin restricciones.",
  },
  {
    id: 2,
    icon: FileText,
    title: "Reportes Avanzados",
    description:
      "Genera reportes detallados con análisis completo del historial vehicular y recomendaciones.",
  },
  {
    id: 3,
    icon: Bell,
    title: "Alertas en Tiempo Real",
    description:
      "Recibe notificaciones sobre cambios en el estado de tu vehículo y vencimientos importantes.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Análisis de Tendencias",
    description:
      "Visualiza tendencias de consumo y mantenimiento para optimizar costos y vida útil.",
  },
  {
    id: 5,
    icon: Download,
    title: "Exportación de Datos",
    description:
      "Exporta tu información en PDF, Excel o CSV para compartir con talleres o aseguradoras.",
  },
  {
    id: 6,
    icon: Headphones,
    title: "Soporte Prioritario",
    description:
      "Acceso directo a nuestro equipo especializado con respuesta garantizada en menos de 24 horas.",
  },
];

export const PLANS = [
  {
    id: 1,
    name: "Gratuito",
    price: "$0",
    period: "Para siempre",
    featured: false,
    cta: "Comenzar gratis",
    ctaVariant: "outline",
    features: [
      { label: "3 consultas al mes", included: true },
      { label: "Consulta RUNT básica", included: true },
      { label: "Consulta Fasecolda", included: false },
      { label: "Historial de consultas", included: false },
      { label: "Exportar reportes", included: false },
      { label: "Soporte prioritario", included: false },
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: "$29.900",
    period: "por mes",
    featured: true,
    cta: "Suscribirse",
    ctaVariant: "primary",
    features: [
      { label: "Consultas ilimitadas", included: true },
      { label: "Consulta RUNT completa", included: true },
      { label: "Consulta Fasecolda", included: true },
      { label: "Historial de consultas", included: true },
      { label: "Exportar reportes", included: true },
      { label: "Soporte prioritario", included: false },
    ],
  },
  {
    id: 3,
    name: "Empresarial",
    price: "$79.900",
    period: "por mes",
    featured: false,
    cta: "Contactar ventas",
    ctaVariant: "dark",
    features: [
      { label: "Todo lo del plan Pro", included: true },
      { label: "Múltiples usuarios", included: true },
      { label: "API de integración", included: true },
      { label: "Dashboard analytics", included: true },
      { label: "Exportar reportes", included: true },
      { label: "Soporte prioritario", included: true },
    ],
  },
];
