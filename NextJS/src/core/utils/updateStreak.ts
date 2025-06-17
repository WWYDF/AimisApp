import { PrismaClient, Games } from '@prisma/client'
import { startOfDay, subDays } from 'date-fns'

const prisma = new PrismaClient()

export async function updateDailyStreak<T extends 'streakTrivia' | 'streakOmegle'>(params: {
  userId: string
  type: Games
  streakField: T
}) {
  const { userId, type, streakField } = params

  const [latestCompletion] = await prisma.completed.findMany({
    where: {
      discordId: userId,
      type,
    },
    orderBy: { completedAt: 'desc' },
    take: 1,
  })

  const today = startOfDay(new Date())
  const yesterday = startOfDay(subDays(new Date(), 1))

  if (latestCompletion) {
    const completedAt = startOfDay(new Date(latestCompletion.completedAt))
    if (completedAt.getTime() === today.getTime()) {
      return { alreadyCompleted: true, updatedStreak: null }
    }
  }

  // Pull both streaks and points (TS-safe)
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      points: true,
      streakTrivia: true,
      streakOmegle: true,
    },
  })

  const currentStreak = user?.[streakField] ?? 0
  const lastDate = latestCompletion ? startOfDay(new Date(latestCompletion.completedAt)) : null

  const newStreak =
    lastDate && lastDate.getTime() === yesterday.getTime() ? currentStreak + 1 : 1

  await prisma.user.update({
    where: { id: userId },
    data: {
      [streakField]: newStreak,
    },
  })

  return { alreadyCompleted: false, updatedStreak: newStreak }
}
