import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import {
  validatePasswords,
  validateEmail,
  isPasswordStrongEnough,
  validateRequiredField,
  validatePhoneNumber,
  validateIdentificationNumber,
  parseErrorMessage,
} from "../../utils/validators";

const initialState = {
  username: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  identificationNumber: "",
  password: "",
  confirmPassword: "",
};

export const useRegisterForm = () => {
  const navigate = useNavigate();
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
      validateRequiredField(formData.username, "Nombre", formData.lastName) ||
      validateEmail(formData.email) ||
      validatePhoneNumber(formData.phoneNumber) ||
      validateIdentificationNumber(formData.identificationNumber) ||
      validatePasswords(formData.password, formData.confirmPassword) ||
      isPasswordStrongEnough(formData.password);

    if (validationError) {
      setMessage(validationError);
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const { confirmPassword, ...payload } = formData;
      const { ok, data } = await registerUser(payload);
      if (ok) {
        setMessage("Registro exitoso. Redirigiendo al inicio de sesión...");
        setMessageType("success");
        setTimeout(() => navigate("/login"), 500);
      } else {
        setMessage(parseErrorMessage(data));
        setMessageType("error");
      }
    } catch {
      setMessage("Error al registrar el usuario.");
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
