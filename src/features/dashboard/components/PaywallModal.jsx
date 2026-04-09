import { X, Shield, CheckCircle2 } from "lucide-react";

const PLAN_FEATURES = [
  "10 consultas vehiculares / mes",
  "Reclamaciones incluidas",
  "Reportes básicos en PDF",
  "Soporte por email",
];

/**
 * Modal de paywall. No sabe nada de navegación ni de lógica de negocio.
 * Principio S: solo presenta el modal y emite eventos al padre.
 * Principio O: los features del plan vienen de una constante, fácil de extender.
 *
 * @param {{ title: string } | null} feature - Funcionalidad que disparó el paywall
 * @param {() => void} onClose
 * @param {() => void} onSubscribe
 */
const PaywallModal = ({ feature, onClose, onSubscribe }) => {
  if (!feature) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-100
            hover:bg-neutral-200 transition"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4 text-neutral-500" />
        </button>

        <div className="p-8">
          {/* Ícono */}
          <div
            className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center
            justify-center mx-auto mb-4"
          >
            <Shield className="h-7 w-7 text-lime-500" />
          </div>

          <h3 className="text-center text-xl font-bold text-cyan-950 mb-2">
            Activa tu plan para continuar
          </h3>
          <p className="text-center text-sm text-gray-500 leading-relaxed mb-6">
            La funcionalidad{" "}
            <span className="font-semibold text-cyan-950">{feature.title}</span>{" "}
            requiere un plan activo.
          </p>

          {/* Plan */}
          <div className="bg-lime-50 border-2 border-lime-400 rounded-xl p-5 mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-cyan-950 text-base">
                Plan Básico
              </span>
              <span className="text-xs bg-lime-500 text-white px-2.5 py-1 rounded-full font-semibold">
                Recomendado
              </span>
            </div>
            <div className="text-3xl font-extrabold text-cyan-950 mt-1">
              $29.900{" "}
              <span className="text-sm font-normal text-gray-500">/ mes</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {PLAN_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-lime-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onSubscribe}
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold
              py-3.5 rounded-xl transition tracking-wide text-sm"
          >
            Registrar método de pago →
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            Cancela cuando quieras · Pago seguro · Sin permanencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
