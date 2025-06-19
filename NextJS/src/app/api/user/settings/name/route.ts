import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/core/prisma'
import { auth } from '@/components/serverSide/authenticate'

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { name } = await req.json()

  await prisma.userSettings.update({
    where: { discordId: session.user.id },
    data: {
      nameOverride: name?.trim() || null,
    },
  })

  return NextResponse.json({ success: true })
}
