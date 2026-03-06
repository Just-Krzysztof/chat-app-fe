import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createChat } from '../services/chat.service'

//Create and Enter by one  req

export const useCreateChat = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userId: string) => createChat(userId),
    onSuccess: newChat => {
      queryClient.setQueryData(['current-chat'], newChat)

      queryClient.invalidateQueries({ queryKey: ['chats'] })
    },
  })
}
