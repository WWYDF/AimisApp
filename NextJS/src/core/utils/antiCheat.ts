import { SusLevel, TriviaSessions } from "@prisma/client"
import { prisma } from "@/core/prisma"

export async function checkCheating(startTime: Date, updTime: Date, session: TriviaSessions): Promise<Boolean> {
  const secondsElapsed = (updTime.getTime() - startTime.getTime()) / 1000
  let susLvl: SusLevel = 'LOW';
  const existing = await prisma.suspicions.findUnique({ where: { sessionId: session.id }, select: { id: true }});

  if (secondsElapsed > 60) { susLvl = 'HIGH' }
  else if (secondsElapsed > 40) { susLvl = 'MEDIUM' }
  else if (secondsElapsed > 20) { susLvl = 'LOW' }
  else { if (!existing) { return false } };

  await prisma.suspicions.upsert({
    where: { sessionId: session.id },
    update: { completeTimes: { push: secondsElapsed } },
    create: {
      sessionId: session.id,
      discordId: session.discordId,
      completeTimes: [secondsElapsed],
      level: susLvl
    }
  })

  return true
}

export async function setTTC(session: TriviaSessions) {
  try {
    const checkIfSus = await prisma.suspicions.findFirst({
      where: { sessionId: session.id },
      orderBy: { loggedAt: 'desc' }
    });

    if (!checkIfSus) { return; } // Nothing to update

    const cTimes = checkIfSus.completeTimes;
    const average = cTimes.reduce((a, b) => a + b, 0) / cTimes.length

    await prisma.suspicions.update({
      where: { id: checkIfSus.id },
      data: {
        avgTTC: average
      }
    })

  } catch {
    console.error(`Failed to update TTC for session ${session.id}!`);
  }
}