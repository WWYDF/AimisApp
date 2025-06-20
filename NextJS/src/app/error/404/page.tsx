import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-2 text-accent">404</h1>
      <p className="text-xl mb-4">This page doesn't exist.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-accent-muted rounded hover:bg-accent-muted/80 transition"
      >
        Go Home
      </Link>
    </div>
  )
}
