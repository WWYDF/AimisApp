'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginPage() {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center space-y-4">
        {session ? (
          <>
            <p>Logged in as: {session.user?.id}</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <p className="text-xl">Test Login</p>
            <button
              onClick={() => signIn('discord')}
              className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
            >
              Login with Discord
            </button>
          </>
        )}
      </div>
    </main>
  )
}
