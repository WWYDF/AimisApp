'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { UserCircle } from 'phosphor-react'
import { NavItems } from '@/core/objects/NavItems'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="w-full h-16 bg-gray-950/40 border-b border-zinc-800 shadow-lg flex items-center px-4 sticky top-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 h-full">
        <Link href="/" className="flex items-center gap-2 h-full">
          <Image
            src="/i/misc/logo.webp"
            alt="App"
            width={48}
            height={48}
            className="rounded"
          />
          <span className="text-white font-bold text-lg">Aimi's App</span>
        </Link>
      </div>

      {/* Center: NavItems */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 items-center">
        {NavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-zinc-300 hover:text-white transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right: Auth */}
      <div className="flex items-center ml-auto">
        {session?.user?.avatar ? (
          <Link href="/profile">
            <Image
              src={session.user.avatar}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full border border-zinc-700 hover:opacity-90 transition cursor-pointer"
            />
          </Link>
        ) : (
          <button onClick={() => signIn('discord')}>
            <UserCircle size={32} className="text-zinc-400 hover:text-white transition cursor-pointer" />
          </button>
        )}
      </div>
    </nav>
  )
}
