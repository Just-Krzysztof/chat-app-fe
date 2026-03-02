import { ChatInput } from '@/modules/Chat/components/ChatInput/ChatInput'
import { ChatParams } from './types'
import { ChatMessage } from '@/modules/Chat/components/ChatMessage/ChatMessage'

export default async function Page({
  params,
}: {
  params: Promise<ChatParams>
}) {
  const { chatId } = await params

  return (
    <>
      <div>Chat ID: {chatId}</div>
      <div className="w-full flex flex-col items-center">
        <ChatMessage />
        <ChatInput />
      </div>
    </>
  )
}
