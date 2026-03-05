// app/page.tsx
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page() {
  const cookieStore = await cookies()
  console.log('cookieStore', cookieStore.get('sessionId')?.value)

  const session = cookieStore.get('sessionId')?.value
  console.log(session)
  if (session) redirect('/dashboard')

  return (
    <div>
      <Link href={'login'}>login</Link>
    </div>
  )
}
