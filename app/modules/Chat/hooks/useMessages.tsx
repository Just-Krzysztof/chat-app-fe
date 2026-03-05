import { useInfiniteQuery } from '@tanstack/react-query'
import { loadMessages } from '../services/chat.service'

export const useMessages = (conversationId: string) => {
  return useInfiniteQuery({
    queryKey: ['messages', conversationId],

    queryFn: ({ pageParam }) => loadMessages(conversationId, pageParam),

    initialPageParam: undefined,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getNextPageParam: (lastPage: any) => {
      console.log(lastPage)
      if (lastPage.length <= 0) return undefined

      return lastPage[lastPage - 1].id
    },
    enabled: !!conversationId,
  })
}
