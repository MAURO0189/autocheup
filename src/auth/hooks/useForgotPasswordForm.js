import { useState } from "react";
import { requestPasswordReset } from "../../services/authService";
import { validateEmail, parseErrorMessage } from "../../utils/validators";

const initialState = { email: "" };

export const useForgotPasswordForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationError = validateEmail(formData.email);
    if (validationError) {
      setMessage(validationError);
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const { ok, data } = await requestPasswordReset(formData.email);
      if (ok) {
        setEmailSent(true);
        setMessage("Revisa tu correo para continuar con el proceso.");
        setMessageType("success");
      } else {
        setMessage(parseErrorMessage(data));
        setMessageType("error");
      }
    } catch {
      setMessage("Error al enviar el correo. Intenta de nuevo.");
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
    emailSent,
    handleChange,
    handleSubmit,
  };
};
