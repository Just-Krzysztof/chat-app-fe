import { useForm } from 'react-hook-form'
import { LoginInput, loginSchema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginInput) => {
    try {
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-80"
    >
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email')}
          className="border p-2 rounded w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
          className="border p-2 rounded w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? 'Please wait....' : 'Login'}
      </button>
    </form>
  )
}
