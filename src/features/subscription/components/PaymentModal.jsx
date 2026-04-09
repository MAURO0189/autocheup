import { X, CreditCard, Lock, CheckCircle2, AlertCircle } from "lucide-react";

const CardField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      inputMode={inputMode}
      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm
        focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent
        placeholder:text-gray-300 font-mono tracking-wider transition"
    />
  </div>
);

/**
 * Modal de registro de tarjeta de crédito.
 * Solo UI — no conoce la pasarela. El submit va a useSubscription.handleConfirmPayment.
 */
const PaymentModal = ({
  plan,
  cardForm,
  loading,
  success,
  error,
  onCardChange,
  onSubmit,
  onClose,
}) => {
  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition z-10"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4 text-neutral-500" />
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6 text-lime-600" />
            </div>
            <div>
              <h3 className="font-bold text-cyan-950 text-lg leading-tight">
                Registrar pago
              </h3>
              <p className="text-sm text-gray-400">
                Plan {plan.name} · ${plan.price.toLocaleString("es-CO")} / mes
              </p>
            </div>
          </div>

          {/* Estado éxito */}
          {success ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-lime-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-lime-500" />
              </div>
              <h4 className="font-bold text-cyan-950 text-lg mb-1">
                ¡Suscripción activada!
              </h4>
              <p className="text-sm text-gray-400">
                Redirigiendo al dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <CardField
                label="Número de tarjeta"
                name="cardNumber"
                value={cardForm.cardNumber}
                onChange={onCardChange}
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
              />
              <CardField
                label="Nombre en la tarjeta"
                name="cardName"
                value={cardForm.cardName}
                onChange={onCardChange}
                placeholder="JUAN DÍAZ"
              />
              <div className="grid grid-cols-2 gap-4">
                <CardField
                  label="Vencimiento"
                  name="expiry"
                  value={cardForm.expiry}
                  onChange={onCardChange}
                  placeholder="MM/AA"
                  inputMode="numeric"
                />
                <CardField
                  label="CVV"
                  name="cvv"
                  type="password"
                  value={cardForm.cvv}
                  onChange={onCardChange}
                  placeholder="•••"
                  inputMode="numeric"
                />
              </div>

              {error && (
                <div
                  className="flex items-center gap-2 text-sm text-red-700 bg-red-50
                  border border-red-200 rounded-lg px-4 py-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-500 hover:bg-lime-600 disabled:opacity-60 text-white
                  font-bold py-3.5 rounded-xl transition text-sm flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                {loading
                  ? "Procesando..."
                  : `Suscribirse · $${plan.price.toLocaleString("es-CO")} / mes`}
              </button>

              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Pago seguro · Cancela cuando
                quieras
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
