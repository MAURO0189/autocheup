const PolizaCard = ({ poliza, onVerMas }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow overflow-hidden mb-3 last:mb-0">
    <div className="px-4 pb-2">
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Placa</span>
        <span className="text-xs font-mono font-medium text-cyan-950 tracking-wide">
          {poliza.placa}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Compañía</span>
        <span className="text-xs font-medium text-cyan-950">
          {poliza.compania}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Vigente</span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            poliza.vigente
              ? "bg-lime-50 text-lime-700 border border-lime-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {poliza.vigente ? "Sí" : "No"}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
        <span className="text-xs text-gray-400">Inicio de vigencia</span>
        <span className="text-xs font-medium text-cyan-950">
          {poliza.inicioVigencia}
        </span>
      </div>
      <div className="flex justify-between items-center py-2.5">
        <span className="text-xs text-gray-400">Fin de vigencia</span>
        <span className="text-xs font-medium text-cyan-950">
          {poliza.finVigencia}
        </span>
      </div>
    </div>
    <div className="flex justify-end px-4 py-2 border-t border-gray-50">
      <button
        onClick={() => onVerMas(poliza)}
        className="text-xs text-cyan-950 font-medium hover:text-lime-600 transition-colors"
      >
        Ver más →
      </button>
    </div>
  </div>
);

export default PolizaCard;
