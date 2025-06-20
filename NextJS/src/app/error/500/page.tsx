'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-2 text-red-500">500</h1>
      <p className="text-xl mb-4">Something went wrong.<br />Please contact dsit on discord.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-accent-muted rounded hover:bg-accent-muted/80 transition"
      >
        Return Home
      </Link>
    </div>
  )
}
