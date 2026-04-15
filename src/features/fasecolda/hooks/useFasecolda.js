import { useState } from "react";

const MOCK_DATA = {
  polizas: [
    {
      id: 1,
      placa: "ABC123",
      compania: "SURA S.A.",
      vigente: true,
      inicioVigencia: "01/01/2025",
      finVigencia: "01/01/2026",
    },
    {
      id: 2,
      placa: "ABC123",
      compania: "BOLIVAR S.A.",
      vigente: false,
      inicioVigencia: "01/01/2024",
      finVigencia: "01/01/2025",
    },
  ],
  siniestros: [
    {
      id: 1,
      placa: "ABC123",
      compania: "SURA S.A.",
      fecha: "15/03/2024",
      numeroSiniestro: "SIN-2024-00123",
    },
    {
      id: 2,
      placa: "ABC123",
      compania: "BOLIVAR S.A.",
      fecha: "22/07/2023",
      numeroSiniestro: "SIN-2023-00456",
    },
  ],
};

export const useFasecolda = () => {
  const [placa, setPlaca] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPlaca(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!placa.trim()) return;

    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      // TODO: reemplazar con apiGet cuando el backend esté listo
      // const { ok, data } = await apiGet(`/api/fasecolda/vehiculo?placa=${placa.trim()}`);
      await new Promise((r) => setTimeout(r, 800)); // simula latencia
      setResultado({ ...MOCK_DATA, placa: placa.trim() });
    } catch {
      setError("No se pudo conectar con el servidor. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return {
    placa,
    resultado,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
};
