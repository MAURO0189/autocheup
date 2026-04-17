import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "./useAuth";
import { validateEmail } from "../../utils/validators";

const MAX_LOGIN_ATTEMPTS = 3;
const LOCKOUT_TIME = 15 * 60 * 1000;
const STORAGE_KEY = "login_lockout";

const initialState = {
  email: "",
  password: "",
};

const getLockoutData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { attempts: 0, lockedUntil: null };
  } catch {
    return { attempts: 0, lockedUntil: null };
  }
};

const setLockoutData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const clearLockoutData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar desde localStorage
  const [lockoutState, setLockoutState] = useState(() => getLockoutData());

  const isLocked =
    lockoutState.lockedUntil && Date.now() < lockoutState.lockedUntil;

  const getRemainingMinutes = () =>
    Math.ceil((lockoutState.lockedUntil - Date.now()) / 1000 / 60);

  const updateLockout = (data) => {
    setLockoutState(data);
    setLockoutData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar bloqueo antes de intentar iniciar sesión
    const current = getLockoutData();
    const stillLocked = current.lockedUntil && Date.now() < current.lockedUntil;

    if (stillLocked) {
      setLockoutState(current);
      setMessage(
        `Demasiados intentos fallidos. Intenta de nuevo en ${Math.ceil((current.lockedUntil - Date.now()) / 1000 / 60)} min.`,
      );
      setMessageType("error");
      return;
    }

    // Si el bloqueo ya expiró, limpiarlo
    if (current.lockedUntil && Date.now() >= current.lockedUntil) {
      clearLockoutData();
      updateLockout({ attempts: 0, lockedUntil: null });
    }

    setIsSubmitting(true);

    const validationError =
      validateEmail(formData.email) ||
      (!formData.password ? "La contraseña es obligatoria." : null);

    if (validationError) {
      setMessage(validationError);
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const { ok, data } = await loginUser(formData);

      if (ok) {
        clearLockoutData();
        updateLockout({ attempts: 0, lockedUntil: null });
        login(data);
        setMessage("Inicio de sesión exitoso. Redirigiendo...");
        setMessageType("success");
        setTimeout(() => navigate("/dashboard"), 600);
      } else {
        const newAttempts = (current.attempts || 0) + 1;

        if (newAttempts >= MAX_LOGIN_ATTEMPTS) {
          const lockedUntil = Date.now() + LOCKOUT_TIME;
          updateLockout({ attempts: 0, lockedUntil });
          setMessage(
            "Demasiados intentos fallidos. Cuenta bloqueada por 15 minutos.",
          );
        } else {
          updateLockout({ attempts: newAttempts, lockedUntil: null });
          setMessage(
            `${data.message || "Correo electrónico o contraseña incorrectos"}. Intentos restantes: ${MAX_LOGIN_ATTEMPTS - newAttempts}`,
          );
        }

        setMessageType("error");
      }
    } catch {
      setMessage("Error al iniciar sesión");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    message,
    messageType,
    isSubmitting,
    isLocked,
    getRemainingMinutes,
    handleChange,
    handleSubmit,
  };
};
