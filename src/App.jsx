import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./features/home/pages/Home";
import Register from "./auth/pages/Register";
import Login from "./auth/pages/Login";
import AdminLoginForm from "./auth/pages/AdminLoginForm";
import ForgotPassword from "./auth/pages/ForgotPassword";
import ResetPassword from "./auth/pages/ResetPassword";
import AdminDashboard from "./admin/AdminDashboard";
import Dashboard from "./features/dashboard/pages/Dashboard";
import ProfilePage from "./features/profile/ProfilePage";
import SubscriptionPage from "./features/subscription/SubscriptionPage";
import RuntPage from "./features/runt/pages/RuntPage";
import ReclamacionesPage from "./features/fasecolda/pages/ReclamacionesPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout principal — rutas públicas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="admin/login" element={<AdminLoginForm />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Rutas protegidas de usuario */}
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/runtPage"
              element={
                <ProtectedRoute>
                  <RuntPage />
                </ProtectedRoute>
              }
            />
            <Route path="/reclamaciones" element={<ReclamacionesPage />} />
            <Route
              path="/subscription"
              element={
                <ProtectedRoute>
                  <SubscriptionPage />
                </ProtectedRoute>
              }
            />

            {/* ✅ AdminDashboard dentro del mismo DashboardLayout */}
            <Route
              path="/adminDashboard"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
