import { apiFetch } from '@/lib/api/apiFetch'
import { CreatedChat } from '../types/type'

export const createChat = (userId: string) => {
  return apiFetch<CreatedChat>(`conversations/direct/${userId}`, {
    method: 'POST',
  })
}
// TODO add types
export const loadMessages = (conversationId: string, cursor?: string) => {
  const query = cursor ? `?cursor=${cursor}` : ''

  return apiFetch(`conversations/${conversationId}/messages${query}`)
}
