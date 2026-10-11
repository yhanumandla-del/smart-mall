const API =
  import.meta.env.VITE_API_URL ||
  'https://smart-mall-production.up.railway.app/api';

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const token = localStorage.getItem('sm_token');

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API}${path}`, {
    ...options,
    headers,
  });

  const raw = await response.text();

  let data = null;

  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = raw;
  }

  if (!response.ok) {
    const err = new Error(
      data?.message ||
      data?.error ||
      `Request failed (${response.status})`
    );

    err.status = response.status;
    throw err;
  }

  return data;
}

export const get = (path) => request(path);

export const post = (path, body) =>
  request(path, {
    method: 'POST',
    body: JSON.stringify(body),
  });

export const put = (path, body) =>
  request(path, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

export const patch = (path, body) =>
  request(path, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });

export const del = (path) =>
  request(path, {
    method: 'DELETE',
  });
