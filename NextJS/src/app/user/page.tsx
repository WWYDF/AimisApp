import { prisma } from '@/core/prisma'
import { redirect } from 'next/navigation'
import { auth } from '@/components/serverSide/authenticate'
import UserProfileEditor from '@/components/clientSide/Users/ProfileEditor';

export default async function ProfileEditPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return redirect('/login')
  }

  const settings = await prisma.userSettings.findUnique({
    where: { discordId: session.user.id },
    include: {
      user: {
        select: { avatar: true },
      },
    },
  })

  if (!settings) {
    return (
      redirect(`/user/${session.user.id}`)
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
      <UserProfileEditor settings={settings} />
    </div>
  )
}
