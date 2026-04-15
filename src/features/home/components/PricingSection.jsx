import { useNavigate } from "react-router-dom";
import PlanCard from "./PlanCard";
import { PLANS } from "../constants/homeData";

const PricingSection = () => {
  const navigate = useNavigate();

  const handleSelect = (plan) => {
    if (plan.ctaVariant === "outline") {
      navigate("/register");
    } else if (plan.ctaVariant === "primary") {
      navigate("/register"); // TODO: navegar a checkout cuando haya pasarela
    } else {
      navigate("/contacto"); // TODO: página de contacto empresarial
    }
  };

  return (
    <section className="py-14 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-950 mb-4 tracking-wide">
            Planes y precios
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Elige el plan que mejor se adapta a tus necesidades. Sin sorpresas,
            cancela cuando quieras.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={handleSelect} />
          ))}
        </div>

        {/* Nota al pie */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Todos los precios incluyen IVA. Puedes cancelar tu suscripción en
          cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
