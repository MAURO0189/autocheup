import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "./useAuth";
import { validateEmail } from "../../utils/validators";

const initialState = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        login(data);
        setMessage("Inicio de sesión exitoso. Redirigiendo...");
        setMessageType("success");
        setTimeout(() => navigate("/dashboard"), 600);
      } else {
        setMessage(data.message || "Error al iniciar sesión");
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
    handleChange,
    handleSubmit,
  };
};
