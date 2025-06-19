import { auth } from '@/components/serverSide/authenticate'
import { NextRequest } from 'next/server'
import { prisma } from '@/core/prisma'
import { updateDailyStreak } from '@/core/utils/updateStreak'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return new Response(JSON.stringify({ error: 'Not signed in' }), { status: 401 })

  const { questionId, answer } = await req.json()
  if (!questionId || !answer) {
    return new Response(JSON.stringify({ error: 'Missing questionId or answer' }), { status: 400 })
  }

  try {
    const userId = session.user.id

    const triviaRes = await fetch(`${process.env.FASTIFY_URL}/v1/trivia`)
    if (!triviaRes.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch trivia data' }), { status: 502 })
    }

    const triviaData = await triviaRes.json()
    const questionList = Array.isArray(triviaData) ? triviaData : []
    const currentQuestionIndex = questionList.findIndex((q: any) => q.id === questionId)
    if (currentQuestionIndex === -1) {
      return new Response(JSON.stringify({ error: 'Invalid question ID' }), { status: 400 })
    }
    const currentQuestion = questionList[currentQuestionIndex]

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

    // Get current session row (or create one)
    let sessionEntry = await prisma.triviaSessions.findFirst({
      where: {
        discordId: userId,
        createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
      },
    })

    if (!sessionEntry) {
      sessionEntry = await prisma.triviaSessions.create({
        data: {
          discordId: userId,
          question: 1,
          correct: null,
          answered: null,
        },
      })
    }

    const currentQuestionNumber = sessionEntry.question
    const isCorrect = currentQuestion.correct === answer

    // Additive
    const rewardTable = {
      1: { reward: 50, penalty: -25 },
      2: { reward: 50, penalty: -150 },
      3: { reward: 100, penalty: -300 },
      4: { reward: 200, penalty: -600 },
      5: { reward: 400, penalty: -1200 },
    }

    const rewardMeta = rewardTable[currentQuestionNumber as 1 | 2 | 3 | 4 | 5]
    if (!rewardMeta) {
      return new Response(JSON.stringify({ error: 'Invalid question number' }), { status: 400 })
    }

    let pointsDelta = 0
    let completed = false

    if (isCorrect) {
      pointsDelta = rewardMeta.reward

      if (sessionEntry.hintUsed) {
        pointsDelta = Math.floor(pointsDelta * 0.25)
      }

      await prisma.user.update({
        where: { id: userId },
        data: { points: user.points + pointsDelta },
      })

      await prisma.pointsHistory.create({
        data: { discordId: userId, points: user.points + pointsDelta },
      })

      await prisma.triviaSessions.update({
        where: { id: sessionEntry.id },
        data: {
          correct: true,
          answered: answer,
          question: currentQuestionNumber + 1,
          hintUsed: false,
        },
      })

      if (currentQuestionNumber === 1) {
        await updateDailyStreak({
          userId,
          type: 'TRIVIA',
          streakField: 'streakTrivia',
        })
      }

      // They won
      if (currentQuestionNumber === 5) {
        completed = true
        await prisma.completed.create({
          data: { discordId: userId, type: 'TRIVIA', won: true },
        })
      }
    } else {
      pointsDelta = rewardMeta.penalty

      await prisma.user.update({
        where: { id: userId },
        data: {
          points: user.points + pointsDelta,
          streakTrivia: 0,
        },
      })

      await prisma.pointsHistory.create({
        data: { discordId: userId, points: user.points + pointsDelta },
      })

      await prisma.triviaSessions.update({
        where: { id: sessionEntry.id },
        data: {
          correct: false,
          answered: answer,
        },
      })

      completed = true
      await prisma.completed.create({
        data: { discordId: userId, type: 'TRIVIA', won: false },
      })
    }

    return new Response(
      JSON.stringify({
        correct: isCorrect,
        correctAnswer: currentQuestion.correct,
        completed,
        points: pointsDelta,
      }),
      { status: 200 }
    )
  } catch (err) {
    console.error('Trivia POST error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
