import FeatureCard from "./FeatureCard";
import { FEATURES } from "../constants/homeData";

const FeaturesSection = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default FeaturesSection;
