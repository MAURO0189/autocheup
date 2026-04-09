import { useState, useEffect, useCallback } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userService";
import { parseErrorMessage } from "../../utils/validators";

const MODAL_CLOSED = null;
const MODAL_NEW = "new"; // señal para crear

export const useUserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(MODAL_CLOSED);
  const [message, setMessage] = useState({ text: "", type: "" });

  const notify = (text, type = "success") => setMessage({ text, type });
  const clearNotify = () => setMessage({ text: "", type: "" });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const { ok, data } = await getUsers();

    if (forbidden) {
      notify("No tienes permisos para ver los usuarios.", "error");
      setLoading(false);
      return;
    }

    if (ok) setUsers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
    };
    loadUsers();
  }, [fetchUsers]);

  const handleCreate = async (payload) => {
    const { ok, data } = await createUser(payload);
    if (ok) {
      setUsers((prev) => [...prev, data]);
      setEditingUser(MODAL_CLOSED);
      notify("Usuario creado correctamente.");
    } else {
      notify(parseErrorMessage(data), "error");
    }
  };

  const handleUpdate = async (id, payload) => {
    const { ok, data } = await updateUser(id, payload);
    if (ok) {
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...payload } : u)),
      );
      setEditingUser(MODAL_CLOSED);
      notify("Usuario actualizado correctamente.");
    } else {
      notify(parseErrorMessage(data), "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
    const { ok } = await deleteUser(id);
    if (ok) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      notify("Usuario eliminado.");
    } else {
      notify("Error al eliminar el usuario.", "error");
    }
  };

  const openCreate = () => {
    clearNotify();
    setEditingUser(MODAL_NEW);
  };
  const openEdit = (user) => {
    clearNotify();
    setEditingUser(user);
  };
  const closeModal = () => setEditingUser(MODAL_CLOSED);

  const isCreating = editingUser === MODAL_NEW;
  const isEditing = editingUser !== MODAL_CLOSED && editingUser !== MODAL_NEW;

  return {
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
  };
};
