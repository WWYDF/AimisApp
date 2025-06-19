import { prisma } from '@/core/prisma'
import { redirect } from 'next/navigation'
import { auth } from '@/components/serverSide/authenticate'
import UserProfileEditor from '@/components/clientSide/Users/ProfileEditor';
import Link from 'next/link';
import { emoticon } from '@/core/objects/emotes';

export default async function ProfileEditPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return redirect('/login')
  }

  const settings = await prisma.userSettings.findUnique({
    where: { discordId: session.user.id },
    include: {
      user: {
        select: { avatar: true, displayName: true, items: true },
      },
    },
  })

  if (!settings) {
    return (
      redirect(`/user/${session.user.id}`)
    )
  }

  const ownedIds = new Set(settings.user.items.map((item) => item.itemId))

  // Merge: Free emotes (no cost) + owned paid emotes
  const availableAvatars = emoticon.filter(
    (e) => e.cost === undefined || ownedIds.has(e.id)
  )

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
        <Link
          href={`/user/${session.user.id}`}
          className="inline-block px-4 py-2 bg-accent-muted text-white rounded cursor-pointer hover:bg-accent-muted/80 transition"
        >
          Go to Profile
        </Link>
      </div>

      <UserProfileEditor settings={settings} availableAvatars={availableAvatars} />
    </div>
  )
}
