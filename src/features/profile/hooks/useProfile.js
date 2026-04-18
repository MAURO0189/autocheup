import { useState, useEffect } from "react";
import { useAuth } from "../../../auth/hooks/useAuth";

export const useProfile = () => {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Sincroniza el form cuando user carga o cambia
  useEffect(() => {
    if (!user) return;
    setForm({
      firstName: user.username ?? "",
      lastName: user.lastName ?? "",
      email: user.email ?? "",
      phone: user.phoneNumber ?? "",
      document: user.identificationNumber ?? "",
    });
  }, [user]);

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
      // TODO: const { ok, data } = await userService.updateProfile(form);
      // if (ok) setUser(data); // ✅ actualiza contexto global sin reload
      await new Promise((r) => setTimeout(r, 800));
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
