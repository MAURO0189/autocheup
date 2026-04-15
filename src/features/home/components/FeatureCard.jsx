// src/features/home/components/FeatureCard.jsx
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow p-6 md:p-8 hover:shadow-lg transition">
    <Icon className="h-12 w-12 text-lime-500 mb-4" />
    <h3 className="text-xl font-semibold mb-3 text-cyan-950 tracking-wider">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

export default FeatureCard;
