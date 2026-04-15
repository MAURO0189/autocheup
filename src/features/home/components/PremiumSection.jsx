import FeatureCard from "./FeatureCard";
import { PREMIUM_FEATURES } from "../constants/homeData";

const PremiumSection = () => (
  <section className="py-12 md:py-14 bg-neutral-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-950 mb-4 tracking-wide">
          Funcionalidades Premium
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Desbloquea todo el potencial de AutoCheckup con nuestra suscripción.
          Accede a herramientas avanzadas y reportes detallados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PREMIUM_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          className="bg-lime-500 text-white font-semibold px-8 py-4 rounded-lg
          shadow hover:bg-lime-600 transition tracking-wide"
        >
          Comenzar Suscripción Premium
        </button>
      </div>
    </div>
  </section>
);

export default PremiumSection;
