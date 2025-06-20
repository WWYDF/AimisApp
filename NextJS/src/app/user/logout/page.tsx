'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

export default function LogoutPage() {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      <p className="text-subtle text-sm">Logging out...</p>
    </div>
  )
}