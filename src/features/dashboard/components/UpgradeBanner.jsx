/**
 * Banner CTA para usuarios sin plan.
 * Principio S: solo presenta el banner, el click lo maneja el padre.
 *
 * @param {() => void} onUpgradeClick
 */
const UpgradeBanner = ({ onUpgradeClick }) => (
  <div
    className="bg-cyan-950 text-white rounded-xl p-5 mb-10 flex flex-col
    md:flex-row items-center justify-between gap-4"
  >
    <div>
      <p className="font-bold text-base">
        Desbloquea todas las funcionalidades
      </p>
      <p className="text-sm text-cyan-100/70 mt-0.5">
        Consulta vehículos, reclamaciones y analítica con un solo plan.
      </p>
    </div>
    <button
      onClick={onUpgradeClick}
      className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2.5
        rounded-lg transition text-sm flex-shrink-0"
    >
      Ver planes →
    </button>
  </div>
);

export default UpgradeBanner;
