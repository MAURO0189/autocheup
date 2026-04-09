import { PLANS } from "../config/plansConfig";
import { CheckCircle2, ArrowRight } from "lucide-react";

/**
 * Banner que muestra el estado del plan actual del usuario.
 * Si está en free, invita a mejorar. Si tiene plan, muestra detalles.
 */
const CurrentPlanBanner = ({ currentPlanId, onUpgradeClick }) => {
  const plan = PLANS.find((p) => p.id === currentPlanId) ?? PLANS[0];
  const isFree = currentPlanId === "free";
  const Icon = plan.icon;

  return (
    <div
      className={`rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center
      justify-between gap-4 border-2
      ${
        isFree ? "bg-neutral-50 border-gray-200" : "bg-cyan-950 border-cyan-800"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
          ${isFree ? "bg-white border border-gray-200" : "bg-white/10"}`}
        >
          <Icon
            className={`w-6 h-6 ${isFree ? "text-gray-400" : "text-lime-400"}`}
          />
        </div>
        <div>
          <p
            className={`text-xs font-medium mb-0.5 ${isFree ? "text-gray-400" : "text-cyan-300"}`}
          >
            Tu plan actual
          </p>
          <p
            className={`text-lg font-bold ${isFree ? "text-gray-700" : "text-white"}`}
          >
            {plan.name}
            {!isFree && (
              <span className="ml-2 text-sm font-normal text-cyan-300">
                · ${plan.price.toLocaleString("es-CO")} / {plan.period}
              </span>
            )}
          </p>
          {!isFree && (
            <div className="flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
              <span className="text-xs text-cyan-300">Suscripción activa</span>
            </div>
          )}
        </div>
      </div>

      {isFree && (
        <button
          onClick={onUpgradeClick}
          className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white
            font-semibold px-5 py-2.5 rounded-lg text-sm transition shrink-0"
        >
          Mejorar plan <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default CurrentPlanBanner;
