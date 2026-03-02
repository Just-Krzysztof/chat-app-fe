import { ChatParams } from './types'

export default async function Page({
  params,
}: {
  params: Promise<ChatParams>
}) {
  const { chatId } = await params

  return <div>Chat ID: {chatId}</div>
}
