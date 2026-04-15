const Row = ({ label, value, mono = false, pill }) => {
  const pillClass =
    pill === "green"
      ? "bg-lime-50 text-lime-700 border border-lime-200"
      : pill === "red"
        ? "bg-red-50 text-red-700 border border-red-200"
        : "";

  return (
    <div className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400">{label}</span>
      {pill ? (
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${pillClass}`}
        >
          {value}
        </span>
      ) : (
        <span
          className={`text-xs font-medium text-cyan-950 ${
            mono ? "font-mono tracking-wide" : ""
          }`}
        >
          {value}
        </span>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow">
    {title && (
      <div className="px-4 pt-4 pb-1">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          {title}
        </p>
      </div>
    )}
    <div className="px-4 pb-2">{children}</div>
  </div>
);

const VehicleCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Placa destacada */}
      <div className="bg-cyan-950 rounded-xl px-6 py-4 text-center">
        <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">
          Placa
        </p>
        <p className="font-mono text-3xl tracking-[0.3em] text-white font-semibold">
          {data.placa}
        </p>
      </div>

      {/* Datos del vehículo */}
      <Section title="Datos del vehículo">
        <Row label="Marca" value={data.marca} />
        <Row label="Línea" value={data.linea} />
        <Row label="Modelo" value={data.modelo} />
        <Row label="Color" value={data.color} />
        <Row label="Clase" value={data.clase} />
        <Row label="Carrocería" value={data.carroceria} />
        <Row label="Combustible" value={data.combustible} />
        <Row label="Cilindraje" value={`${data.cilindraje} cc`} />
        <Row label="VIN" value={data.vin} mono />
        <Row label="N° Motor" value={data.numeroMotor} mono />
      </Section>

      {/* Propietario */}
      <Section title="Propietario">
        <Row label="Nombre" value={data.propietario.nombre} />
        <Row
          label="Documento"
          value={`${data.propietario.tipoDocumento} ${data.propietario.documento}`}
        />
      </Section>

      {/* SOAT y Tecnomecánica en grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="SOAT">
          <Row
            label="Estado"
            value={data.soat.vigente ? "Vigente" : "Vencido"}
            pill={data.soat.vigente ? "green" : "red"}
          />
          <Row label="Vencimiento" value={data.soat.vencimiento} />
          <Row label="Aseguradora" value={data.soat.aseguradora} />
        </Section>

        <Section title="Tecnomecánica">
          <Row
            label="Estado"
            value={data.tecnomecanica.vigente ? "Vigente" : "Vencida"}
            pill={data.tecnomecanica.vigente ? "green" : "red"}
          />
          <Row label="Vencimiento" value={data.tecnomecanica.vencimiento} />
          <Row label="Centro" value={data.tecnomecanica.centro} />
        </Section>
      </div>
    </div>
  );
};

export default VehicleCard;
