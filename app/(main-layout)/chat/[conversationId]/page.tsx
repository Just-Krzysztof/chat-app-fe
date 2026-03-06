import { ChatInput } from '@/modules/Chat/components/ChatInput/ChatInput'
import { ChatParams } from './types'
import { ChatMessages } from '@/modules/Chat/components/ChatMessages/ChatMessages'

export default async function Page({
  params,
}: {
  params: Promise<ChatParams>
}) {
  const { conversationId } = await params

  return (
    <>
      <div>Chat ID: {conversationId}</div>
      <div className="w-full flex flex-col items-center">
        <ChatMessages conversationId={conversationId} />
        <ChatInput conversationId={conversationId} />
      </div>
    </>
  )
}
