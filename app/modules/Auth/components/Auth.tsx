import { LoginForm } from './LoginForm/LoginForm'
import { RegisterForm } from './RegisterForm/RegisterForm'
import { usePathname } from 'next/navigation'

export const Auth = () => {
  const route = usePathname()

  const checkPage = () => {
    return route.includes('register') ? (
      <RegisterForm></RegisterForm>
    ) : (
      <LoginForm></LoginForm>
    )
  }
  return (
    <div className="flex flex-col">
      <h1>Auth</h1>
      {checkPage()}
    </div>
  )
}
