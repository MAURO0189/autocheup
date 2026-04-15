import { Search } from "lucide-react";

const SearchPlate = ({ value, onChange, onSubmit, loading }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow p-5">
    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
      Placa del vehículo
    </p>
    <form onSubmit={onSubmit} className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ej: ABC123"
        maxLength={6}
        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5
          font-mono text-xl tracking-widest uppercase text-cyan-950 font-semibold
          focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent
          placeholder:text-gray-300 placeholder:text-base placeholder:tracking-normal
          placeholder:font-sans placeholder:font-normal transition"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="bg-lime-500 hover:bg-lime-600 disabled:opacity-50 text-white
          px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2
          transition-colors whitespace-nowrap"
      >
        <Search className="w-4 h-4" />
        {loading ? "Consultando..." : "Consultar"}
      </button>
    </form>
  </div>
);

export default SearchPlate;
