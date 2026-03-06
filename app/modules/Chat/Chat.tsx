'use client'
import { useQuery } from '@tanstack/react-query'
import { ChatInput } from './components/ChatInput/ChatInput'
import { ChatMessages } from './components/ChatMessages/ChatMessages'

type TChat = {
  id: string
  name: string
  type: 'direct' | 'group'
  directKey: string
  lastMessageAt: Date
}

export const Chat = () => {
  const { data: currentChat } = useQuery<TChat | null>({
    queryKey: ['current-chat'],
    queryFn: () => null,
  })
  console.log('currentChat', currentChat)

  if (!currentChat) return <div>Wybierz usera, aby rozpocząć chat</div>

  return (
    <div className="w-full flex flex-col items-center">
      <ChatMessages conversationId={currentChat.id} />
      <ChatInput conversationId={currentChat.id} />
    </div>
  )
}
