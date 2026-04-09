export const validatePasswords = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden.";
  }
};

export const isPasswordStrongEnough = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>,.?~\\/-]{8,}$/;
  if (!passwordRegex.test(password)) {
    return "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
  }
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return emailRegex.test(email)
      ? ""
      : "Por favor, ingresa un correo electrónico válido.";
  }
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    return "Por favor, ingresa un número de teléfono válido.";
  }
};

export const validateRequiredField = (value, fieldName, fieldLastName) => {
  const fieldRegex = /^\s*$/;
  if (fieldRegex.test(value)) {
    return `El campo ${fieldName} es obligatorio.`;
  }

  if (!value || value.trim() === "") {
    return `El campo ${fieldName} es obligatorio.`;
  }

  if (fieldLastName) {
    const lastNameRegex = /^\s*$/;
    if (lastNameRegex.test(fieldLastName)) {
      return `El campo ${fieldLastName} es obligatorio.`;
    }
  }
};

export const validateIdentificationNumber = (idNumber) => {
  const idRegex = /^\d{6,10}$/;
  if (!idRegex.test(idNumber)) {
    return "Por favor, ingresa un número de identificación válido.";
  }
};

export const parseErrorMessage = (data) => {
  if (data.message) return data.message;
  if (data.error) return data.error;
  if (data.erros?.length) {
    const first = data.erros[0];
    return first.erros?.[0] ?? (typeof first === "string" ? first : null);
  }
  return "Hubo un problema con el registro";
};
