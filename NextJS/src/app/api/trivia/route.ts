import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { id, answer } = body

  if (!id || !answer) {
    return new Response(JSON.stringify({ error: 'Missing id or answer' }), { status: 400 })
  }

  try {
    const res = await fetch(`${process.env.FASTIFY_URL}/v1/trivia`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch trivia' }), { status: 502 })
    }

    const current = await res.json()

    if (current.id !== id) {
      return new Response(JSON.stringify({ error: 'Stale trivia question' }), { status: 409 })
    }

    const correct = current.correct === answer

    return new Response(
      JSON.stringify({
        correct,
        correctAnswer: correct ? undefined : current.correct,
      }),
      { status: 200 }
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
