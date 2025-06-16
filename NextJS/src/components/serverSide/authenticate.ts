import { AuthOptions, getServerSession } from "next-auth"
import DiscordProvider from 'next-auth/providers/discord'
import { prisma } from '@/core/prisma'

export function auth() {
  return getServerSession(authOptions)
}

function getDiscordAvatarUrl(id: string, avatar: string | null | undefined): string | null {
  if (!avatar) return null

  const isAnimated = avatar.startsWith('a_')
  return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${isAnimated ? 'gif' : 'png'}?animated=${isAnimated}`
}

export const authOptions: AuthOptions = {
  
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: 'identify' } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ profile }) {
      if (!profile) return false

      const discordProfile = profile as {
        id: string
        username: string
        global_name?: string
        avatar?: string | null
      }
    
      const id = discordProfile.id
      const username = discordProfile.username
      const displayName = discordProfile.global_name ?? null
      const avatar = getDiscordAvatarUrl(id, discordProfile.avatar)
    
      await prisma.user.upsert({
        where: { id },
        update: {
          username,
          displayName,
          avatar,
          lastSeen: new Date(),
        },
        create: {
          id,
          username,
          displayName,
          avatar,
          lastSeen: new Date(),
          createdAt: new Date(),
        },
      })
    
      return true
    },    

    async session({ session, token }) {
      if (!token.sub) return session
    
      const user = await prisma.user.findUnique({
        where: { id: token.sub },
        select: {
          id: true,
          username: true,
          displayName: true,
          avatar: true,
        },
      })
    
      if (user) {
        session.user.id = user.id
        session.user.username = user.username
        session.user.displayName = user.displayName
        session.user.avatar = user.avatar
      }
    
      return session
    }
  },
}