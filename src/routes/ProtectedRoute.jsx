import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/hooks/useAuth";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  // No autenticado → login guardando la ruta de origen
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Autenticado pero no es admin intentando acceder a ruta admin
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
