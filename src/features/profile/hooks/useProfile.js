import { useState, useEffect } from "react";
import { useAuth } from "../../../auth/hooks/useAuth";
import { updateUserProfile } from "../../../services/profileService";

const OCCUPATIONS = [
  "Empleado",
  "Independiente / Freelancer",
  "Empresario",
  "Estudiante",
  "Desempleado",
  "Pensionado / Jubilado",
  "Otros",
];

const HOW_DID_YOU_FIND_US = [
  "Redes sociales",
  "Referido por un amigo",
  "Búsqueda en internet",
  "Publicidad",
  "Evento o feria",
  "Otros",
];

export { OCCUPATIONS, HOW_DID_YOU_FIND_US };

export const useProfile = () => {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",
    birthDate: "",
    occupation: "",
    otherOccupation: "",
    howDidYouFindUs: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    setForm({
      firstName: user.username ?? "",
      lastName: user.lastName ?? "",
      email: user.email ?? "",
      phone: user.phoneNumber ?? "",
      document: user.identificationNumber ?? "",
      birthDate: user.birthDate ? user.birthDate.split("T")[0] : "",
      occupation: user.occupation ?? "",
      otherOccupation: user.otherOccupation ?? "",
      howDidYouFindUs: user.howDidYouFindUs ?? "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "occupation" && value !== "Otros") {
        updated.otherOccupation = "";
      }
      return updated;
    });
    setSuccess(false);
    setError(null);
  };

  const validate = () => {
    if (!form.firstName.trim()) return "El nombre es obligatorio";
    if (!form.birthDate) return "La fecha de nacimiento es obligatoria";

    const birth = new Date(form.birthDate);
    const minDate = new Date("1900-01-01");
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 1);
    if (birth < minDate || birth > maxDate)
      return "La fecha de nacimiento no es válida";

    if (!form.occupation) return "La ocupación es obligatoria";
    if (form.occupation === "Otros" && !form.otherOccupation.trim())
      return "Debes especificar tu ocupación";
    if (!form.howDidYouFindUs) return "Indica cómo nos conociste";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!user?.uuid) {
      setError("Sesión no disponible. Recarga la página.");
      return;
    }

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        username: form.firstName,
        birthDate: form.birthDate,
        occupation: form.occupation,
        howDidYouFindUs: form.howDidYouFindUs,
        ...(form.occupation === "Otros"
          ? { otherOccupation: form.otherOccupation }
          : {}),
      };

      const { ok, data } = await updateUserProfile(user.uuid, payload);

      if (ok) {
        setSuccess(true);
        setUser((prev) => ({ ...prev, ...data.profile }));
      } else {
        setError(data?.error ?? "No se pudo actualizar el perfil");
      }
    } catch {
      setError("No se pudo actualizar el perfil. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const initials =
    [form.firstName[0], form.lastName[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() || "U";

  return {
    user,
    form,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    initials,
    OCCUPATIONS,
    HOW_DID_YOU_FIND_US,
  };
};
