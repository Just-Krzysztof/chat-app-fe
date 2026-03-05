import { useUsersList } from '@/modules/UsersList/hooks/useUsersList'
import { User } from '@/modules/UsersList/types/type'
import { useRouter } from 'next/navigation'
import { FaCircle } from 'react-icons/fa6'

export const UserBox = () => {
  const { data } = useUsersList()
  const route = useRouter()

  const showName = (user: User) => {
    if (!user.firstName && !user.lastName) return user.email
    else return `${user.firstName} ${user.lastName}`
  }

  const openChat = (userId: string) => {
    route.push(`chat/${userId}`)
  }

  return (
    <div>
      {data?.map(user => (
        <div key={user.id}>
          <button
            className="flex gap-2 items-center border border-gray-500 p-2 rounded-xl cursor-pointer"
            onClick={() => openChat(user.id)}
          >
            <FaCircle className="text-green-500" />
            <span>{showName(user)}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
