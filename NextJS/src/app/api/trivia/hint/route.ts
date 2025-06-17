import { auth } from '@/components/serverSide/authenticate'
import { NextRequest } from 'next/server'
import { prisma } from '@/core/prisma'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return new Response(JSON.stringify({ error: 'Not signed in' }), { status: 401 })

  const { questionId } = await req.json()
  if (!questionId) return new Response(JSON.stringify({ error: 'Missing questionId' }), { status: 400 })

  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const sessionEntry = await prisma.triviaSessions.findFirst({
      where: {
        discordId: session.user.id,
        createdAt: { gte: today },
      },
    })

    if (!sessionEntry) {
      return new Response(JSON.stringify({ error: 'No active session' }), { status: 404 })
    }

    await prisma.triviaSessions.update({
      where: { id: sessionEntry.id },
      data: {
        hintUsed: true,
      },
    })

    return new Response(JSON.stringify({ success: true }))
  } catch (err) {
    console.error('Hint submission error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
