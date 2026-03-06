'use client'

import { getSocket } from '@/socket/socket'
import { useRef } from 'react'

type TMessageProps = {
  conversationId: string
}

export const ChatInput = ({ conversationId }: TMessageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const socket = getSocket()

  const send = () => {
    console.log('hej')
    if (!inputRef.current) return
    const content = inputRef.current?.value
    // sendMessage(content)
    console.log('Sending message:', content)
    socket.emit('send-message', { conversationId, content })
    console.log('\x1b[35m Sent new message! \x1b[0m')
  }

  return (
    <>
      <div>
        <input
          type="text"
          className="border border-white"
          ref={inputRef}
        ></input>
        <button
          onClick={() => send()}
          className="cursor-pointer border border-amber-50 rounded-sm bg-amber-400 text-black"
        >
          Send
        </button>
      </div>
    </>
  )
}
