const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}/${url}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}))
    throw new Error(errData.message || 'API Error')
  }

  return res.json()
}
