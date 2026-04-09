import { Receipt, CheckCircle2, Clock } from "lucide-react";

const STATUS = {
  paid: {
    label: "Pagado",
    Icon: CheckCircle2,
    style: "text-lime-700 bg-lime-50 border-lime-200",
  },
  pending: {
    label: "Pendiente",
    Icon: Clock,
    style: "text-amber-700 bg-amber-50 border-amber-200",
  },
};

const formatDate = (d) =>
  new Date(d).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/**
 * Tabla de historial de pagos.
 * Principio S: solo presenta — no busca ni descarga datos.
 */
const PaymentHistory = ({ history }) => {
  if (!history?.length)
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow p-10 text-center">
        <Receipt className="w-10 h-10 text-gray-200 mx-auto mb-3" />
        <p className="text-sm text-gray-400">
          Aún no tienes pagos registrados.
        </p>
      </div>
    );

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-cyan-950 text-base">
          Historial de pagos
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Todos tus pagos y facturas
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-400">
              <th className="text-left px-6 py-3 font-medium">Fecha</th>
              <th className="text-left px-6 py-3 font-medium">Plan</th>
              <th className="text-left px-6 py-3 font-medium">Monto</th>
              <th className="text-left px-6 py-3 font-medium">Estado</th>
              <th className="text-left px-6 py-3 font-medium">Factura</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {history.map((p) => {
              const s = STATUS[p.status] ?? STATUS.pending;
              return (
                <tr key={p.id} className="hover:bg-neutral-50 transition">
                  <td className="px-6 py-4 text-gray-600">
                    {formatDate(p.date)}
                  </td>
                  <td className="px-6 py-4 font-medium text-cyan-950">
                    {p.plan}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    ${p.amount.toLocaleString("es-CO")}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium
                      px-2.5 py-1 rounded-full border ${s.style}`}
                    >
                      <s.Icon className="w-3 h-3" /> {s.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        // TODO: await paymentService.downloadInvoice(p.id)
                      }}
                      className="text-xs text-cyan-700 hover:underline font-medium"
                    >
                      Descargar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
