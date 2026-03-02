'use client'
import { useMutation } from '@tanstack/react-query'
import { apiFetch } from './lib/api/apiFetch'

export default function Home() {
  const test = useMutation({
    mutationFn: () =>
      apiFetch('user/me', {
        method: 'Get',
      }),
    onSuccess: data => {
      console.log(data)
    },
    onError: (err: unknown) => {
      console.error(err)
    },
  })
  const handleClick = () => {
    test.mutate()
    console.log('click')
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        tutaj
        <button
          type="button"
          onClick={handleClick}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {'Login'}
        </button>
      </main>
    </div>
  )
}
