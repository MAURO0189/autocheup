import { useRunt } from "../hooks/useRunt";
import SearchPlate from "../components/SearchPlate";
import VehicleCard from "../components/VehicleCard";
import ErrorMessage from "../components/ErrorMessage";

const RuntPage = () => {
  const { placa, resultado, loading, error, handleChange, handleSubmit } =
    useRunt();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-cyan-950 text-white py-10 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight mb-1">
            Consulta RUNT
          </h1>
          <p className="text-sm text-blue-100">
            Información vehicular oficial por placa.
          </p>
          <span
            className="inline-flex items-center gap-2 mt-3 text-xs
            bg-lime-500/20 border border-lime-400/40 text-lime-300
            px-3 py-1 rounded-full font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            Plan activo
          </span>
        </div>
      </section>

      {/* Contenido */}
      <div className="container mx-auto max-w-2xl px-4 py-8 flex flex-col gap-5">
        <SearchPlate
          value={placa}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
        />

        <ErrorMessage message={error} />

        {loading && (
          <div className="flex items-center justify-center py-12 text-gray-400 text-sm gap-3">
            <span
              className="w-4 h-4 border-2 border-gray-200 border-t-lime-500
              rounded-full animate-spin"
            />
            Consultando información vehicular...
          </div>
        )}

        {resultado && <VehicleCard data={resultado} />}
      </div>
    </div>
  );
};

export default RuntPage;
