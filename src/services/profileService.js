import { apiPatch } from "./apiClient";

export const updateUserProfile = async (uuid, profileData) => {
  if (!uuid) return { ok: false, data: { error: "UUID no disponible" } };
  return apiPatch(`/api/users/profile/${uuid}`, profileData);
};
