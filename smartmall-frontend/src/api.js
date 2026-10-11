const API = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

async function request(path, options = {}) {
  const headers = {'Content-Type':'application/json', ...(options.headers || {})}
  const token = localStorage.getItem('sm_token')
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API}${path}`, {...options, headers})
  const raw = await response.text()
  let data = null
  try { data = raw ? JSON.parse(raw) : null } catch { data = raw }

  if (!response.ok) {
    const err = new Error(data?.message || data?.error || `Request failed (${response.status})`)
    err.status = response.status
    throw err
  }
  return data
}

export const get = p => request(p)
export const post = (p,b) => request(p,{method:'POST',body:JSON.stringify(b)})
export const put = (p,b) => request(p,{method:'PUT',body:JSON.stringify(b)})
export const patch = (p,b) => request(p,{method:'PATCH',body:JSON.stringify(b)})
export const del = p => request(p,{method:'DELETE'})
