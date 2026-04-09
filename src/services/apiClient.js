const backURL = import.meta.env.VITE_BACKEND_URL;

// Cachear el CSRF token para no pedirlo en cada request
let csrfToken = null;

const getCsrfToken = async () => {
  if (csrfToken) return csrfToken;

  const res = await fetch(`${backURL}/api/auth/csrf-token`, {
    credentials: "include", // necesario para que envíe/reciba cookies
  });
  const data = await res.json();
  csrfToken = data.csrfToken;
  return csrfToken;
};

// GET — no necesita CSRF token
export const apiGet = async (path) => {
  const res = await fetch(`${backURL}${path}`, {
    credentials: "include",
  });
  const data = await res.json();
  return { ok: res.ok, data };
};

// POST/PUT/DELETE — necesitan CSRF token
export const apiPost = async (path, body) => {
  const csrf = await getCsrfToken();

  const res = await fetch(`${backURL}${path}`, {
    method: "POST",
    credentials: "include", // envía cookies al backend
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf, // requerido por csurf
    },
    body: JSON.stringify(body),
  });

  // Si el CSRF expiró, limpiar caché y reintentar una vez
  if (res.status === 403) {
    csrfToken = null;
    return apiPost(path, body);
  }

  const data = await res.json();
  return { ok: res.ok, data };
};

export const apiDelete = async (path) => {
  const csrf = await getCsrfToken();

  const res = await fetch(`${backURL}${path}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "X-CSRF-Token": csrf,
    },
  });
  const data = await res.json();
  return { ok: res.ok, data };
};
