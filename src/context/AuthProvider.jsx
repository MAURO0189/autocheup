import { useState, useCallback, useEffect, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentUser, logoutUser } from "../services/authService";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const checkAuth = async () => {
      try {
        const { ok, data } = await getCurrentUser();
        if (ok) setUser(data);
      } catch (error) {
        console.error("Error checking auth:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // ✅ login() ahora llama a /api/auth/me para obtener perfil completo
  const login = useCallback(async () => {
    try {
      const { ok, data } = await getCurrentUser();
      if (ok) setUser(data);
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setUser(null);
    }
  }, []);

  const isAdmin = user?.role === "admin";

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="w-6 h-6 border-2 border-cyan-700 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
