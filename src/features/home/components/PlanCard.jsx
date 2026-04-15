import { Check, X } from "lucide-react";

const FeatureRow = ({ label, included }) => (
  <div className="flex items-start gap-2.5 text-sm text-gray-500">
    {included ? (
      <span
        className="w-4 h-4 rounded-full bg-lime-50 border border-lime-200
        flex items-center justify-center shrink-0 mt-0.5"
      >
        <Check className="w-2.5 h-2.5 text-lime-700 stroke-[2.5]" />
      </span>
    ) : (
      <span
        className="w-4 h-4 rounded-full bg-gray-50 border border-gray-200
        flex items-center justify-center shrink-0 mt-0.5"
      >
        <X className="w-2.5 h-2.5 text-gray-300 stroke-[2.5]" />
      </span>
    )}
    <span className={included ? "text-gray-600" : "text-gray-300"}>
      {label}
    </span>
  </div>
);

const CTA_STYLES = {
  outline: "border border-gray-200 text-cyan-950 hover:bg-gray-50",
  primary: "bg-lime-500 text-white hover:bg-lime-600",
  dark: "bg-cyan-950 text-white hover:bg-cyan-900",
};

const PlanCard = ({ plan, onSelect }) => (
  <div
    className={`relative bg-white rounded-xl flex flex-col gap-5 p-6 transition
      ${
        plan.featured
          ? "border-2 border-lime-500 shadow-lg"
          : "border border-gray-100 shadow"
      }`}
  >
    {/* Badge popular */}
    {plan.featured && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span
          className="bg-lime-500 text-white text-xs font-semibold
          px-4 py-1 rounded-full whitespace-nowrap"
        >
          Más popular
        </span>
      </div>
    )}

    {/* Precio */}
    <div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
        {plan.name}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold text-cyan-950">
          {plan.price}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{plan.period}</p>
    </div>

    <hr className="border-gray-100" />

    {/* Features */}
    <div className="flex flex-col gap-3 flex-1">
      {plan.features.map((feature, i) => (
        <FeatureRow key={i} {...feature} />
      ))}
    </div>

    {/* CTA */}
    <button
      onClick={() => onSelect(plan)}
      className={`w-full py-2.5 rounded-lg text-sm font-semibold
        transition-colors ${CTA_STYLES[plan.ctaVariant]}`}
    >
      {plan.cta}
    </button>
  </div>
);

export default PlanCard;
