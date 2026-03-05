// import { useLoadMessages } from '../../hooks/useMessages'
'use client'
import { useMessages } from '../../hooks/useMessages'

type TMessageProps = {
  conversationId: string
}

export const ChatMessages = ({ conversationId }: TMessageProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMessages(conversationId)

  const messages = data?.pages.flat() ?? []

  return (
    <>
      <div>
        {messages.map(message => (
          <div key={message.id}>
            <pre>{JSON.stringify(message, null, 2)}</pre>
          </div>
        ))}
      </div>
    </>
  )
}
