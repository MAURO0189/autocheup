import { apiGet, apiPost, apiDelete } from "../../services/apiClient";

// Auth
export const registerAdmin = (formData) =>
  apiPost("/api/admins/register", formData);

export const loginAdmin = (formData) => apiPost("/api/admins/login", formData);

export const logoutAdmin = () => apiPost("/api/admins/logout", {});

// CRUD
export const getAdmins = () => apiGet("/api/admins");

export const getAdminById = (id) => apiGet(`/api/admins/${id}`);

export const updateAdmin = (id, payload) =>
  apiPatch(`/api/admins/${id}`, payload);

export const deleteAdmin = (id) => apiDelete(`/api/admins/${id}`);
