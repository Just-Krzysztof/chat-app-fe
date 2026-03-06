import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppWrapper } from './components/AppWrapper/AppWrapper'
import { SocketProvider } from './components/SocketProvider/SocketProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Hidden Conversation for everyone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>Header</header>
        <AppWrapper>
          <SocketProvider>
            <main>{children}</main>
          </SocketProvider>
        </AppWrapper>
        <footer>Footer</footer>
      </body>
    </html>
  )
}
