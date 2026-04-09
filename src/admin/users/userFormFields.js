import { User, Mail, MapPin, Briefcase } from "lucide-react";

export const USER_FORM_FIELDS = [
  {
    id: "username",
    name: "username",
    label: "Nombre",
    type: "text",
    placeholder: "Nombre",
    icon: User,
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Apellido",
    type: "text",
    placeholder: "Apellido",
    icon: User,
  },
  {
    id: "email",
    name: "email",
    label: "Correo",
    type: "email",
    placeholder: "Correo",
    icon: Mail,
  },
];

export const INITIAL_FORM = {
  username: "",
  lastName: "",
  email: "",
};
