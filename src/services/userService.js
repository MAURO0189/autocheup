import { apiGet, apiPost, apiPatch, apiDelete } from "./apiClient";

export const getUsers = () => apiGet("/api/users");

export const getUserById = (id) => apiGet(`/api/users/${id}`);

export const createUser = (payload) => apiPost("/api/users", payload);

export const updateUser = (id, payload) =>
  apiPatch(`/api/users/${id}`, payload);

export const deleteUser = (id) => apiDelete(`/api/users/${id}`);
