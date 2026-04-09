import { X } from "lucide-react";
import { useState, useEffect } from "react";
import FormField from "../../auth/components/FormField";
import { USER_FORM_FIELDS, INITIAL_FORM } from "./userFormFields";

const UserForm = ({ user, isCreating, onSave, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  useEffect(() => {
    const updateForm = () => {
      if (!isCreating && user) {
        setFormData({
          username: user.username ?? "",
          lastName: user.lastName ?? "",
          email: user.email ?? "",
        });
      } else {
        setFormData(INITIAL_FORM);
      }
    };
    updateForm();
  }, [user, isCreating]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(isCreating ? null : user.id, formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-cyan-950 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">
            {isCreating ? "Nuevo usuario" : "Editar usuario"}
          </h2>
          <button
            onClick={onClose}
            className="text-cyan-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Campos */}
        <div className="p-6 flex flex-col gap-4">
          {USER_FORM_FIELDS.map((field) => (
            <FormField
              key={field.id}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}

          {/* Acciones */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-lime-500 text-white py-2.5 rounded-lg hover:bg-lime-600 text-sm font-medium transition-colors"
            >
              {isCreating ? "Crear usuario" : "Guardar cambios"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
