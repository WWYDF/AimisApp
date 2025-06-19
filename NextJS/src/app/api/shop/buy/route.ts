import { auth } from '@/components/serverSide/authenticate'
import { prisma } from '@/core/prisma'
import { shopItems } from '@/core/objects/shopItems'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) { return NextResponse.json({ error: 'Not logged in' }, { status: 401 }) }

  const { itemId } = await req.json()

  if (!itemId) {
    return NextResponse.json({ error: 'Missing itemId' }, { status: 400 })
  }
  
  const item = shopItems.find((i) => i.id === itemId)
  
  if (!item) {
    return NextResponse.json({ error: 'Invalid item' }, { status: 404 })
  }


  // Check if already owned
  const alreadyOwned = await prisma.ownedItems.findUnique({
    where: {
      discordId_itemId: {
        discordId: session.user.id,
        itemId: item.id,
      },
    },
  })

  if (alreadyOwned) { return NextResponse.json({ error: 'Already purchased' }, { status: 409 }) }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { points: true },
  })

  if (!user || user.points < item.cost) {
    return NextResponse.json({ error: 'Not enough points' }, { status: 403 })
  }

  // Remove points and add item. If one fails, they both fail.
  await prisma.$transaction([
    prisma.user.update({
      where: { id: session.user.id },
      data: { points: { decrement: item.cost } },
    }),
    prisma.ownedItems.create({
      data: {
        itemId: item.id,
        discordId: session.user.id,
      },
    }),
  ])

  return NextResponse.json({ success: true })
}
