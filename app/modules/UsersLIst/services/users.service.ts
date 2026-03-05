import { apiFetch } from '@/lib/api/apiFetch'
import { User } from '../types/type'

export const getUsers = () => {
  return apiFetch<User[]>('user/all')
}
