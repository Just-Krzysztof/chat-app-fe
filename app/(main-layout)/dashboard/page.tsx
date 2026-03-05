'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { UsersList } from '@/modules/UsersLIst/UsersList'
const Dashboard: React.FC = () => {
  const router = useRouter()

  const goToChat = (id: string) => {
    router.push(`/chat/${id}`)
  }
  return (
    <div className="w-full flex justify-center gap-[80px]">
      <ul>
        <li>
          <button onClick={() => goToChat('1')} className="cursor-pointer">
            Chat 1
          </button>
        </li>
      </ul>
      <UsersList />
    </div>
  )
}

export default Dashboard
