'use client'
import { Auth } from '@/modules/Auth/components/Auth'
import React from 'react'

const SignUp: React.FC = () => {
  return (
    <div className="w-full flex justify-center gap-[80px]">
      <Auth />
    </div>
  )
}

export default SignUp
