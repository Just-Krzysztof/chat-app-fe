import { io, Socket } from 'socket.io-client'

const API_URL = process.env.NEXT_PUBLIC_API_URL

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(API_URL!, {
      withCredentials: true,
      autoConnect: true, // lub false, jeśli chcesz ręcznie connect
    })
  }
  return socket
}
