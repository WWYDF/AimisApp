import { prisma } from '@/core/prisma'
import { auth } from '@/components/serverSide/authenticate'

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new Response('Unauthorized', { status: 401 })

  const { avatar } = await req.json()

  if (avatar !== null && typeof avatar !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid avatar' }), { status: 400 })
  }

  await prisma.userSettings.update({
    where: { discordId: session.user.id },
    data: { emoteAvatar: avatar ?? null },
  })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
