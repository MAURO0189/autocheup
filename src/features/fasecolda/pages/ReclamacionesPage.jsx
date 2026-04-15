// src/features/fasecolda/pages/ReclamacionesPage.jsx
import { useFasecolda } from "../hooks/useFasecolda";
import SearchPlate from "../../runt/components/SearchPlate";
import ErrorMessage from "../../runt/components/ErrorMessage";
import PolizaCard from "../components/PolizaCard";
import SiniestroCard from "../components/SiniestroCard";

const SectionTitle = ({ title, count }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="w-0.5 h-4 bg-lime-500 rounded-full" />
    <h2 className="text-sm font-semibold text-cyan-950">{title}</h2>
    {count > 0 && (
      <span className="bg-cyan-950 text-white text-xs font-medium px-2 py-0.5 rounded-full">
        {count}
      </span>
    )}
  </div>
);

const ReclamacionesPage = () => {
  const { placa, resultado, loading, error, handleChange, handleSubmit } =
    useFasecolda();

  const handleVerMas = (item) => {
    // TODO: abrir modal o navegar a detalle
    console.log("Ver más:", item);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-cyan-950 text-white py-10 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight mb-1">
            Reclamaciones
          </h1>
          <p className="text-sm text-blue-100">
            Consulta de pólizas y siniestros por placa.
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
            Consultando información...
          </div>
        )}

        {resultado && (
          <>
            {/* Placa destacada */}
            <div className="bg-cyan-950 rounded-xl px-6 py-4 text-center">
              <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">
                Placa
              </p>
              <p className="font-mono text-3xl tracking-[0.3em] text-white font-semibold">
                {resultado.placa}
              </p>
            </div>

            {/* Pólizas */}
            <div>
              <SectionTitle
                title="Información de pólizas"
                count={resultado.polizas.length}
              />
              {resultado.polizas.length > 0 ? (
                resultado.polizas.map((poliza) => (
                  <PolizaCard
                    key={poliza.id}
                    poliza={poliza}
                    onVerMas={handleVerMas}
                  />
                ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-6">
                  No se encontraron pólizas para esta placa.
                </p>
              )}
            </div>

            {/* Siniestros */}
            <div>
              <SectionTitle
                title="Información de siniestros"
                count={resultado.siniestros.length}
              />
              {resultado.siniestros.length > 0 ? (
                resultado.siniestros.map((siniestro) => (
                  <SiniestroCard
                    key={siniestro.id}
                    siniestro={siniestro}
                    onVerMas={handleVerMas}
                  />
                ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-6">
                  No se encontraron siniestros para esta placa.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReclamacionesPage;
