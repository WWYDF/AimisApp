import { auth } from '@/components/serverSide/authenticate';
import { NextRequest } from 'next/server'
import { prisma } from '@/core/prisma'
import { isToday } from '@/core/utils/dates';
import { updateDailyStreak } from '@/core/utils/updateStreak';

const winPoints = 50;
const lossPoints = 25;

export async function POST(req: NextRequest) {
  const session = await auth();
  const body = await req.json()
  const { id, answer } = body

  if (!session) { return new Response(JSON.stringify({ error: 'Not signed in' }), { status: 401 }) }
  if (!id || !answer) { return new Response(JSON.stringify({ error: 'Missing id or answer' }), { status: 400 }) }

  try {
    // Check if user has already submitted today.
    const latestCompletion = await prisma.completed.findFirst({
      where: {
        discordId: session.user.id,
        type: 'TRIVIA',
      },
      orderBy: { completedAt: 'desc' },
    })

    if (latestCompletion) {
      const completedToday = isToday(latestCompletion.completedAt);
      if (completedToday) { return new Response(JSON.stringify({ error: 'You already completed this today!' }), { status: 409 }) }
    }

    
    // Alright, they have not completed today's trivia. Continue.
    const res = await fetch(`${process.env.FASTIFY_URL}/v1/trivia`, { cache: 'no-store' })
    if (!res.ok) { return new Response(JSON.stringify({ error: 'Failed to fetch trivia' }), { status: 502 }) }

    const current = await res.json()
    if (current.id !== id) { return new Response(JSON.stringify({ error: 'Stale trivia question' }), { status: 409 }) }

    const correct = current.correct === answer
    const currentUser = await prisma.user.findUnique({ where: { id: session.user.id } });
    let totalPoints = 0; // Gets altered below.

    if (correct) {
      totalPoints = currentUser!.points + winPoints;

      // Give Points
      await prisma.user.update({
        where: { id: session.user.id },
        data: { points: totalPoints }
      });

      // Calculate Streak
      await updateDailyStreak({userId: session.user.id, type: 'TRIVIA', streakField: 'streakTrivia'});
    } else if (!correct) { // I know this (if) is redunant, i dont care lol
      totalPoints = currentUser!.points - lossPoints;

      // Remove streak & remove points
      await prisma.user.update({
        where: { id: session.user.id },
        data: { streakTrivia: 1, points: totalPoints }
      });
    }

    // Regardless of outcome, log points changes:
    await prisma.pointsHistory.create({
      data: {
        points: totalPoints,
        discordId: session.user.id
      }
    });

    // ...and add entry to prevent other attempts for today:
    await prisma.completed.create({
      data: {
        type: 'TRIVIA',
        discordId: session.user.id
      }
    })

    // Return Response
    return new Response(
      JSON.stringify({
        correct,
        correctAnswer: correct ? undefined : current.correct,
      }),
      { status: 200 }
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: `${err}` }), { status: 500 })
  }
}
