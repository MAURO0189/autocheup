import { useState } from "react";
//import { useAuth } from "../../auth/hooks/useAuth";

/**
 * Lógica de la página de perfil.
 * Solo cubre: datos personales + foto de avatar.
 */
export const useProfile = () => {
  //const { user } = useAuth();
  const user = null; // Simulación del usuario autenticado

  // ── Formulario datos personales ──────────────────────────
  const [form, setForm] = useState({
    firstName: user?.userName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    document: user?.document ?? "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSuccess(false);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // TODO: await userService.updateProfile(form);
      await new Promise((r) => setTimeout(r, 800)); // simula latencia
      setSuccess(true);
    } catch {
      setError("No se pudo actualizar el perfil. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // ── Avatar ───────────────────────────────────────────────
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);
    // TODO: await storageService.uploadAvatar(file);
  };

  // Iniciales para el avatar por defecto
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
    avatarPreview,
    handleAvatarChange,
    initials,
  };
};
