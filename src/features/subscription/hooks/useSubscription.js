import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../../auth/hooks/useAuth";
import { MOCK_PAYMENT_HISTORY } from "../config/plansConfig";

/**
 * Toda la lógica de la página de suscripción.
 *
 * ── Cómo conectar la pasarela cuando la elijas ───────────────────────────
 *
 * El único lugar que cambia es handleConfirmPayment.
 * Los componentes visuales NO se tocan.
 *
 * Stripe:
 *   const { paymentMethod } = await stripe.createPaymentMethod({ type: "card", card });
 *   await api.post("/subscriptions", { paymentMethodId: paymentMethod.id, priceId: plan.priceId });
 *
 * MercadoPago:
 *   const mp = new MercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);
 *   const token = await mp.createCardToken({ cardNumber, cardholderName, ... });
 *   await api.post("/subscriptions", { token: token.id, planId: plan.priceId });
 *
 * PayU:
 *   const token = await payuService.tokenizeCard({ cardNumber, name, expiry, cvv });
 *   await api.post("/subscriptions", { token, planCode: plan.priceId });
 * ─────────────────────────────────────────────────────────────────────────
 */
export const useSubscription = () => {
  //const { user } = useAuth();
  const user = null;
  const navigate = useNavigate();

  const currentPlanId = user?.plan ?? "free";

  // ── Modal de pago ────────────────────────────────────────
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  // Formulario de tarjeta (UI únicamente — el tokenizado lo hace la pasarela)
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 16);
      const formatted = digits.match(/.{1,4}/g)?.join(" ") ?? digits;
      return setCardForm((p) => ({ ...p, cardNumber: formatted }));
    }
    if (name === "expiry") {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      const formatted =
        digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
      return setCardForm((p) => ({ ...p, expiry: formatted }));
    }
    if (name === "cvv") {
      return setCardForm((p) => ({
        ...p,
        cvv: value.replace(/\D/g, "").slice(0, 4),
      }));
    }
    setCardForm((p) => ({ ...p, [name]: value }));
  };

  const handleSelectPlan = (plan) => {
    if (plan.id === currentPlanId) return;
    setSelectedPlan(plan);
    setPaymentError(null);
    setPaymentSuccess(false);
    setCardForm({ cardNumber: "", cardName: "", expiry: "", cvv: "" });
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setPaymentError(null);
    setPaymentSuccess(false);
  };

  const handleConfirmPayment = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    setPaymentError(null);
    try {
      // ── REEMPLAZAR con tu pasarela ──
      await new Promise((r) => setTimeout(r, 1200));
      // ───────────────────────────────

      setPaymentSuccess(true);
      // TODO: updateUserPlan(selectedPlan.id) en tu contexto de auth
      setTimeout(() => {
        handleCloseModal();
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setPaymentError(
        err.message ?? "No se pudo procesar el pago. Intenta de nuevo.",
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  // TODO: reemplazar con await paymentService.getHistory()
  const paymentHistory = MOCK_PAYMENT_HISTORY;

  return {
    currentPlanId,
    selectedPlan,
    paymentLoading,
    paymentSuccess,
    paymentError,
    cardForm,
    handleCardChange,
    handleSelectPlan,
    handleCloseModal,
    handleConfirmPayment,
    paymentHistory,
  };
};
