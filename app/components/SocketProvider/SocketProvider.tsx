'use client'

import { useEffect } from 'react'
import { getSocket } from '@/socket/socket'

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const socket = getSocket()
    console.log('\x1b[42m Connected to socket! \x1b[0m')
    // console.log('\x1b[33m Connected to socket! \x1b[0m')
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  return <>{children}</>
}
