const SiniestroCard = ({ siniestro, onVerMas }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow overflow-hidden mb-3 last:mb-0">
    <div className="px-4 pb-2">
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Placa</span>
        <span className="text-xs font-mono font-medium text-cyan-950 tracking-wide">
          {siniestro.placa}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Compañía</span>
        <span className="text-xs font-medium text-cyan-950">
          {siniestro.compania}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Fecha</span>
        <span className="text-xs font-medium text-cyan-950">
          {siniestro.fecha}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5">
        <span className="text-xs text-gray-400">N° Siniestro</span>
        <span className="text-xs font-mono font-medium text-cyan-950 tracking-wide">
          {siniestro.numeroSiniestro}
        </span>
      </div>
    </div>
    <div className="flex justify-end px-4 py-2 border-t border-gray-50">
      <button
        onClick={() => onVerMas(siniestro)}
        className="text-xs text-cyan-950 font-medium hover:text-lime-600 transition-colors"
      >
        Ver más →
      </button>
    </div>
  </div>
);

export default SiniestroCard;
