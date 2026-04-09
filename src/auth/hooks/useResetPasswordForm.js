import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../services/authService";
import {
  validatePasswords,
  isPasswordStrongEnough,
  parseErrorMessage,
} from "../../utils/validators";

const initialState = { password: "", confirmPassword: "" };

export const useResetPasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // /reset-password?token=xxx

  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!token) {
      setMessage("Token inválido o expirado.");
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    const validationError =
      validatePasswords(formData.password, formData.confirmPassword) ||
      isPasswordStrongEnough(formData.password);

    if (validationError) {
      setMessage(validationError);
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const { ok, data } = await resetPassword({
        token,
        password: formData.password,
      });
      if (ok) {
        setMessage("Contraseña actualizada. Redirigiendo...");
        setMessageType("success");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(parseErrorMessage(data));
        setMessageType("error");
      }
    } catch {
      setMessage("Error al actualizar la contraseña.");
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
