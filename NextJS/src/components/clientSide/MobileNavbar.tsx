'use client'

import { useState } from 'react'
import { House, ChartBar, ShoppingCart, List, X, Question } from 'phosphor-react'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="flex md:hidden items-center justify-between bg-[#0d111e] p-4 border-b border-zinc-800 sticky top-0 z-50">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>

      <Link href="/" className="flex items-center gap-2">
        <Image src="/i/misc/logo.webp" alt="Logo" width={32} height={32} className="rounded" />
        <span className="text-white font-bold text-lg">Aimi's App</span>
      </Link>

      {session?.user?.avatar ? (
        <Link href="/user">
          <Image src={session.user.avatar} width={32} height={32} alt="User" className="rounded-xl" unoptimized />
        </Link>
      ) : (
        <button onClick={() => signIn('discord', { callbackUrl: '/user' })}>
          <span className="text-white">Login</span>
        </button>
      )}

      {open && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 pb-6 p-4 space-y-4 z-40">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors"
            onClick={() => setOpen(false)}
          >
            <House size={22} />
            Home
          </Link>
          <Link 
            href="/leaderboards"
            className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors"
            onClick={() => setOpen(false)}
          >
            <ChartBar size={22} />
            Leaderboard
          </Link>
          <Link
            href="/shop"
            className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors"
            onClick={() => setOpen(false)}
          >
            <ShoppingCart size={22} />
            Shop
            </Link>
          <Link
            href="/trivia"
            className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors"
            onClick={() => setOpen(false)}
          >
            <Question size={22} />
            Trivia
          </Link>
        </div>
      )}
    </nav>
  )
}
