// import { useLoadMessages } from '../../hooks/useMessages'
'use client'
import { useEffect } from 'react'
import { useMessages } from '../../hooks/useMessages'
import { getSocket } from '@/socket/socket'
import { useQueryClient } from '@tanstack/react-query'

type TMessageProps = {
  conversationId: string
}

type TMessageType = {
  id: string
  content: string
  isRead: boolean
  createdAt: Date
  senderId: string
}

export const ChatMessages = ({ conversationId }: TMessageProps) => {
  const queryClient = useQueryClient()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMessages(conversationId)

  const messages = data?.pages.flat() ?? []
  useEffect(() => {
    const socket = getSocket()
    socket.emit('join-conversation', conversationId)
    console.log('\x1b[35m Connected to conversation! \x1b[0m', conversationId)
    return () => {
      socket.emit('leave-conversation', conversationId)
    }
  }, [conversationId])

  useEffect(() => {
    const socket = getSocket()

    socket.on('new-message', (message: TMessageType) => {
      queryClient.setQueryData(['messages', conversationId], (oldData: any) => {
        if (!oldData) return oldData

        return {
          ...oldData,
          pages: [[message, ...oldData.pages[0]], ...oldData.pages.slice(1)],
        }
      })
    })
    return () => {
      socket.off('new-message')
    }
  }, [conversationId, queryClient])

  return (
    <>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <pre>{JSON.stringify(message, null, 2)}</pre>
          </div>
        ))}
      </div>
    </>
  )
}
