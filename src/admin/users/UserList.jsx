import { Pencil, Trash2, UserPlus } from "lucide-react";
import { useUserManager } from "../hooks/useUserManager";
import UserForm from "./UserForm";

const UserList = () => {
  const {
    users,
    loading,
    message,
    editingUser,
    isCreating,
    isEditing,
    openCreate,
    openEdit,
    closeModal,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useUserManager();

  const handleSave = (id, data) =>
    id === null ? handleCreate(data) : handleUpdate(id, data);

  return (
    <div>
      {/* Cabecera */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-cyan-950">Usuarios</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {users.length} usuario{users.length !== 1 ? "s" : ""} registrado
            {users.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors text-sm font-medium"
        >
          <UserPlus className="w-4 h-4" />
          Nuevo usuario
        </button>
      </div>

      {/* Notificación */}
      {message.text && (
        <p
          className={`mb-4 text-sm text-center font-medium ${
            message.type === "error" ? "text-red-500" : "text-green-600"
          }`}
        >
          {message.text}
        </p>
      )}

      {/* Tabla */}
      {loading ? (
        <div className="text-center py-16 text-gray-400">
          Cargando usuarios...
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          No hay usuarios registrados.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-cyan-950 text-white">
              <tr>
                {["Nombre", "Correo", "Rol", "Ciudad", "Acciones"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-cyan-950">
                    {u.username} {u.lastName}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{u.email}</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3">
                      <button
                        onClick={() => openEdit(u)}
                        className="text-cyan-700 hover:text-cyan-950 transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(u.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {(isCreating || isEditing) && (
        <UserForm
          user={editingUser}
          isCreating={isCreating}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UserList;
