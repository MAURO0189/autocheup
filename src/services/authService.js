import { apiPost, apiGet } from "./apiClient";

export const registerUser = (formData) =>
  apiPost("/api/users/register", formData);

export const loginUser = (formData) => apiPost("/api/users/login", formData);

export const logoutUser = () => apiPost("/api/users/logout", {});

export const getCurrentUser = () => apiGet("/api/auth/me");

export const requestPasswordReset = (email) =>
  apiPost("/auth/forgot-password", { email });

export const resetPassword = ({ token, password }) =>
  apiPost("/auth/reset-password", { token, password });
