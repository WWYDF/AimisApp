'use client'

import { useEffect } from 'react'
import { signIn } from 'next-auth/react'

export default function LogoutPage() {
  useEffect(() => {
    signIn('discord')
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}