const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const apiFetch = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const res = await fetch(`${API_URL}/${url}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data.message || 'API Error')
  }

  return data
}
