// src/features/runt/hooks/useRunt.js
import { useState } from "react";

const MOCK_DATA = {
  placa: "",
  marca: "CHEVROLET",
  linea: "SPARK GT",
  modelo: "2021",
  color: "BLANCO",
  cilindraje: "1200",
  combustible: "GASOLINA",
  vin: "KL1TJ6DE4MB123456",
  numeroMotor: "B12D1ZM123456",
  clase: "AUTOMÓVIL",
  carroceria: "SEDAN",
  propietario: {
    nombre: "JUAN CARLOS DÍAZ",
    documento: "1234567890",
    tipoDocumento: "CC",
  },
  soat: {
    vigente: true,
    vencimiento: "2025-12-31",
    aseguradora: "SURA",
  },
  tecnomecanica: {
    vigente: false,
    vencimiento: "2024-08-15",
    centro: "TECNICENTRO NORTE",
  },
};

export const useRunt = () => {
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
      // const { ok, data } = await apiGet(`/api/runt/vehiculo?placa=${placa.trim()}`);
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
