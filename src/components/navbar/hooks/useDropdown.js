import { useState, useRef, useCallback } from "react";

/**
 * Hook reutilizable para manejar dropdowns.
 * @param {number} closeDelay - ms de espera antes de cerrar al salir con el mouse
 */
export function useDropdown(closeDelay = 150) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const clearPendingClose = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const toggle = useCallback((menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  }, []);

  const open = useCallback(
    (menu) => {
      clearPendingClose();
      setOpenDropdown(menu);
    },
    [clearPendingClose],
  );

  const scheduledClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), closeDelay);
  }, [closeDelay]);

  const closeAll = useCallback(() => {
    clearPendingClose();
    setOpenDropdown(null);
  }, [clearPendingClose]);

  return { openDropdown, toggle, open, scheduledClose, closeAll };
}
