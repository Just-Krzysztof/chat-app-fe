export type CreatedChat = {
  id: string
  name: string | null
  type: 'direct' | 'group'
  directKey: string
  lastMessageAt: Date | null
  createdAt: Date
  participants: [
    {
      userId: string
      conversationId: string
      role: 'member' | 'admin'
      joinedAt: Date
    },
    {
      userId: string
      conversationId: string
      role: 'member' | 'admin'
      joinedAt: Date
    },
  ]
}
