import { useUsersList } from '@/modules/UsersLIst/hooks/useUsersList'

export const UserBox = () => {
  const { data } = useUsersList()
  return (
    <div>
      {' '}
      {data?.map(user => (
        <div key={user.id}>{JSON.stringify(user)}</div>
      ))}
    </div>
  )
}
