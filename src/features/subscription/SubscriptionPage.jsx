import { useRef } from "react";
import { useSubscription } from "./hooks/useSubscription";
import { PLANS } from "./config/plansConfig";
import CurrentPlanBanner from "./components/CurrentPlanBanner";
import PlanCard from "./components/PlanCard";
import PaymentModal from "./components/PaymentModal";
import PaymentHistory from "./components/PaymentHistory";

/**
 * Página de suscripción y pagos.
 * Se monta dentro de DashboardLayout vía <Outlet />.
 * Ruta: /subscription
 *
 * Secciones:
 *  1. Estado del plan actual  → CurrentPlanBanner
 *  2. Comparar planes         → grid de PlanCard
 *  3. Historial de pagos      → PaymentHistory
 *  4. Modal de pago           → PaymentModal (condicional)
 */
const SubscriptionPage = () => {
  const plansRef = useRef(null);

  const {
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
  } = useSubscription();

  // Scroll suave a los planes cuando el usuario hace click en "Mejorar plan"
  const scrollToPlans = () =>
    plansRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-cyan-950 text-white py-10 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            Planes y suscripción
          </h2>
          <p className="text-sm text-cyan-100/70 mt-1.5 max-w-lg">
            Elige el plan que mejor se adapta a tus necesidades. Cancela cuando
            quieras.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-10">
        {/* 1. Estado del plan actual */}
        <CurrentPlanBanner
          currentPlanId={currentPlanId}
          onUpgradeClick={scrollToPlans}
        />

        {/* 2. Comparar planes */}
        <section ref={plansRef}>
          <h3 className="text-lg font-bold text-cyan-950 mb-6">
            Elige tu plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                currentPlanId={currentPlanId}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>
        </section>

        {/* 3. Historial de pagos */}
        <section>
          <h3 className="text-lg font-bold text-cyan-950 mb-4">Facturación</h3>
          <PaymentHistory history={paymentHistory} />
        </section>
      </div>

      {/* 4. Modal de pago */}
      <PaymentModal
        plan={selectedPlan}
        cardForm={cardForm}
        loading={paymentLoading}
        success={paymentSuccess}
        error={paymentError}
        onCardChange={handleCardChange}
        onSubmit={handleConfirmPayment}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SubscriptionPage;
