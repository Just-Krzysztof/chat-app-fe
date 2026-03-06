'use client'
import React from 'react'
import { UsersList } from '@/modules/UsersList/UsersList'
import { Chat } from '@/modules/Chat/Chat'
const Dashboard: React.FC = () => {
  return (
    <div className="w-full flex justify-center gap-[80px]">
      <Chat />
      <UsersList />
    </div>
  )
}

export default Dashboard
