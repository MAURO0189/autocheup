import { CheckCircle2, XCircle } from "lucide-react";

const formatPrice = (price) =>
  price === 0 ? "Gratis" : `$${price.toLocaleString("es-CO")}`;

/**
 * Tarjeta de un plan individual.
 * Principio O: para añadir plan → editar plansConfig.js, no este componente.
 */
const PlanCard = ({ plan, currentPlanId, onSelect }) => {
  const Icon = plan.icon;
  const isActive = plan.id === currentPlanId;
  const isHighlighted = plan.highlight;

  return (
    <div
      className={`relative bg-white rounded-2xl border-2 flex flex-col transition-shadow
      ${
        isHighlighted
          ? "border-lime-400 shadow-lg shadow-lime-100"
          : isActive
            ? "border-cyan-950"
            : "border-gray-100 shadow"
      }`}
    >
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-lime-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
            Recomendado
          </span>
        </div>
      )}
      {isActive && !isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-cyan-950 text-white text-xs font-bold px-4 py-1 rounded-full">
            Plan actual
          </span>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center
            ${isHighlighted ? "bg-lime-50" : "bg-neutral-100"}`}
          >
            <Icon
              className={`w-5 h-5 ${isHighlighted ? "text-lime-600" : "text-cyan-950"}`}
            />
          </div>
          <div>
            <h3 className="font-bold text-cyan-950 text-base leading-tight">
              {plan.name}
            </h3>
            <p className="text-xs text-gray-400">{plan.description}</p>
          </div>
        </div>

        {/* Precio */}
        <div className="mb-5">
          <span className="text-3xl font-extrabold text-cyan-950">
            {formatPrice(plan.price)}
          </span>
          {plan.period && (
            <span className="text-sm text-gray-400 ml-1">/ {plan.period}</span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-6">
          {plan.features.map((f) => (
            <li key={f.text} className="flex items-start gap-2.5 text-sm">
              {f.included ? (
                <CheckCircle2 className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-gray-200 mt-0.5 shrink-0" />
              )}
              <span className={f.included ? "text-gray-700" : "text-gray-300"}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => onSelect(plan)}
          disabled={isActive}
          className={`w-full py-3 rounded-xl text-sm font-bold transition
            ${
              isActive
                ? "bg-neutral-100 text-neutral-400 cursor-default"
                : isHighlighted
                  ? "bg-lime-500 hover:bg-lime-600 text-white"
                  : "bg-cyan-950 hover:bg-cyan-900 text-white"
            }`}
        >
          {isActive ? "Plan actual" : `Elegir ${plan.name}`}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
