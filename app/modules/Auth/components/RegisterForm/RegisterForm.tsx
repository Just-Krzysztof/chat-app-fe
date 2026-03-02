import { useForm } from 'react-hook-form'
import { RegisterInput, registerSchema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '@/lib/api/apiFetch'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) })

  const router = useRouter()

  const registerMutation = useMutation({
    mutationFn: (data: RegisterInput) =>
      apiFetch('auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: data => {
      console.log('Zarejestrowano', data)
      router.push('/')
    },
    onError: (err: unknown) => {
      if (err instanceof Error) {
        console.error('Register error:', err.message)
      } else {
        console.error('Register error:', err)
      }
    },
  })

  const onSubmit = async (data: RegisterInput) => registerMutation.mutate(data)

  return (
    <>
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
        <div>
          <label>First name</label>
          <input
            type="text"
            {...register('firstName')}
            className="border p-2 rounded w-full"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            {...register('lastName')}
            className="border p-2 rounded w-full"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? 'Please wait....' : 'Register'}
        </button>
      </form>
    </>
  )
}
