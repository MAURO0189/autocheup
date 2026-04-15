import HeroSlider from "../components/HeroSlider";
import FeaturesSection from "../components/FeaturesSection";
import PremiumSection from "../components/PremiumSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <HeroSlider />
      <FeaturesSection />
      <PremiumSection />
      <PricingSection />
    </div>
  );
}
