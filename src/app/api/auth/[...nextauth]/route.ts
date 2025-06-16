import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { prisma } from '@/core/prisma'

function getDiscordAvatarUrl(id: string, avatar: string | null | undefined): string | null {
  if (!avatar) return null

  const isAnimated = avatar.startsWith('a_')
  return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${isAnimated ? 'gif' : 'png'}?animated=${isAnimated}`
}

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: 'identify email' } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

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
      if (token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
