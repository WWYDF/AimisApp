import TriviaClient from "@/components/clientSide/Trivia/TriviaClient"
import { auth } from "@/components/serverSide/authenticate";
import { redirect } from "next/navigation";
import { prisma } from "@/core/prisma"
import { isToday } from "date-fns";

export default async function TriviaPage() {
  const session = await auth()
  if (!session) redirect('/user/login')

  const userId = session.user.id

  const lastComp = await prisma.completed.findFirst({
    where: { discordId: userId, type: 'TRIVIA' },
    orderBy: { completedAt: 'desc' },
  })

  if (lastComp && isToday(lastComp.completedAt)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl font-bold">You have already played today!</h1>
        <h3 className="text-xl">Come back tomorrow for more rewards!</h3>
      </div>
    )
  }

  const res = await fetch('http://localhost:12244/v1/trivia', {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch trivia')

  const data = await res.json()
  if (!Array.isArray(data)) throw new Error('Invalid trivia format')

  const triviaList = data.map(({ id, question, type, choices, image, hint }) => ({
    id,
    question,
    type,
    choices,
    image,
    hint
  }))

  let sessionEntry = await prisma.triviaSessions.findFirst({
    where: {
      discordId: userId,
      createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
    },
  })

  // Create entry if one doesn't exist for this user yet.
  if (!sessionEntry) {
    sessionEntry = await prisma.triviaSessions.create({ data: {
      discordId: userId,
      question: 1
    }})
  }
  
  const currentIndex = sessionEntry?.question ? sessionEntry.question - 1 : 0
  
  return (
    <TriviaClient triviaList={triviaList} initialIndex={currentIndex} />
  )
}