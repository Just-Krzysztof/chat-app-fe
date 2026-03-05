import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createChat } from '../services/chat.service'

export const useCreateChat = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userId: string) => createChat(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['new-chat'] })
    },
  })
}
