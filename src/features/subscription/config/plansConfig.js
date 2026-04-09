import { Zap, Shield, Star } from "lucide-react";

/**
 * Configuración central de planes.
 * Para cambiar precio, features o añadir un plan: solo editar aquí.
 *
 * priceId: ID del plan en tu pasarela (null hasta que lo decidas).
 *   - Stripe:      price_xxxxx
 *   - MercadoPago: plan ID del preapproval_plan
 *   - PayU:        planCode
 */
export const PLANS = [
  {
    id: "free",
    icon: Zap,
    name: "Gratuito",
    price: 0,
    period: null,
    priceId: null,
    description: "Para explorar la plataforma",
    highlight: false,
    features: [
      { text: "Panel básico", included: true },
      { text: "Gestión de perfil", included: true },
      { text: "Consultas vehiculares", included: false },
      { text: "Reclamaciones", included: false },
      { text: "Analítica", included: false },
      { text: "Reportes en PDF", included: false },
      { text: "Soporte prioritario", included: false },
    ],
  },
  {
    id: "basic",
    icon: Shield,
    name: "Básico",
    price: 29900,
    period: "mes",
    priceId: null,
    description: "Para consultas periódicas",
    highlight: true, // badge "Recomendado"
    features: [
      { text: "Todo lo del plan Gratuito", included: true },
      { text: "10 consultas vehiculares / mes", included: true },
      { text: "Reclamaciones incluidas", included: true },
      { text: "Reportes básicos en PDF", included: true },
      { text: "Analítica avanzada", included: false },
      { text: "Exportación Excel / CSV", included: false },
      { text: "Soporte prioritario", included: false },
    ],
  },
  {
    id: "premium",
    icon: Star,
    name: "Premium",
    price: 79900,
    period: "mes",
    priceId: null,
    description: "Para uso profesional intensivo",
    highlight: false,
    features: [
      { text: "Todo lo del plan Básico", included: true },
      { text: "Consultas ilimitadas", included: true },
      { text: "Analítica avanzada", included: true },
      { text: "Exportación Excel / CSV", included: true },
      { text: "Alertas en tiempo real", included: true },
      { text: "Reportes detallados", included: true },
      { text: "Soporte prioritario 24h", included: true },
    ],
  },
];

/** Mock de historial — reemplaza con tu API. */
export const MOCK_PAYMENT_HISTORY = [
  {
    id: "pay_001",
    date: "2025-03-01",
    plan: "Básico",
    amount: 29900,
    status: "paid",
  },
  {
    id: "pay_002",
    date: "2025-02-01",
    plan: "Básico",
    amount: 29900,
    status: "paid",
  },
  {
    id: "pay_003",
    date: "2025-01-01",
    plan: "Básico",
    amount: 29900,
    status: "pending",
  },
];
