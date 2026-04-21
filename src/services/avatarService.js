import { apiGet, apiPatch } from "./apiClient";

const backURL = import.meta.env.VITE_BACKEND_URL;

const MAX_SIZE_BYTES = 1 * 1024 * 1024;
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
  "image/gif",
];

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!ALLOWED_TYPES.includes(file.type))
      return reject(
        new Error("Formato no permitido. Usa JPG, JPEG, PNG, WEBP o GIF"),
      );
    if (file.size > MAX_SIZE_BYTES)
      return reject(new Error("La imagen no puede superar 1 MB"));

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = () => reject(new Error("Error al leer el archivo"));
    reader.readAsDataURL(file);
  });

export const uploadAvatar = async (uuid, imageBase64, mimeType) => {
  if (!uuid) return { ok: false, data: { error: "UUID no disponible" } };
  return apiPatch(`/api/users/avatar/${uuid}`, { imageBase64, mimeType });
};

export const getAvatarUrl = (uuid) =>
  uuid ? `${backURL}/api/users/avatar/${uuid}` : null;
