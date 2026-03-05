import { ChatInput } from '@/modules/Chat/components/ChatInput/ChatInput'
import { ChatParams } from './types'
import { ChatMessage } from '@/modules/Chat/components/ChatMessage/ChatMessage'

export default async function Page({
  params,
}: {
  params: Promise<ChatParams>
}) {
  const { userId } = await params

  return (
    <>
      <div>Chat ID: {userId}</div>
      <div className="w-full flex flex-col items-center">
        <ChatMessage />
        <ChatInput />
      </div>
    </>
  )
}
