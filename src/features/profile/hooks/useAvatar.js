import { useState, useCallback } from "react";
import {
  fileToBase64,
  uploadAvatar,
  getAvatarUrl,
} from "../../../services/avatarService";

export const useAvatar = (uuid) => {
  const [preview, setPreview] = useState(
    // Al montar, intenta cargar el avatar existente desde el servidor
    getAvatarUrl(uuid),
  );
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAvatarChange = useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setError(null);
      setSuccess(false);
      setUploading(true);

      try {
        const base64 = await fileToBase64(file);

        // Preview inmediato antes de confirmar el upload
        const localPreview = URL.createObjectURL(file);
        setPreview(localPreview);

        const { ok, data } = await uploadAvatar(uuid, base64, file.type);

        if (ok) {
          setSuccess(true);
          // Reemplazar el blob local por la URL del servidor con cache-bust
          setPreview(`${getAvatarUrl(uuid)}?t=${Date.now()}`);
          URL.revokeObjectURL(localPreview);
        } else {
          setError(data?.error ?? "Error al subir la foto");
          setPreview(getAvatarUrl(uuid)); // revertir al avatar guardado
        }
      } catch (err) {
        setError(err.message);
        setPreview(getAvatarUrl(uuid));
      } finally {
        setUploading(false);
        // Limpiar el input para permitir seleccionar el mismo archivo de nuevo
        e.target.value = "";
      }
    },
    [uuid],
  );

  return { preview, uploading, error, success, handleAvatarChange };
};
