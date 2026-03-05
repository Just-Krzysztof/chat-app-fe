import { apiFetch } from '@/lib/api/apiFetch'
import { CreatedChat } from '../types/type'

export const createChat = (userId: string) => {
  return apiFetch<CreatedChat>(`conversations/direct/${userId}`, {
    method: 'POST',
  })
}
