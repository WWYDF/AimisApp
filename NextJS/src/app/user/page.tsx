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

      <div className="flex gap-2">
        <Link
          href={`/user/logout`}
          className="px-4 py-2 bg-red-800 text-white rounded cursor-pointer hover:bg-red-900 transition"
          title='Logout'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224.49,128a8,8,0,0,1-2.34,5.65l-40,40a8,8,0,0,1-11.32-11.32L196.69,136H104a8,8,0,0,1,0-16h92.69l-25.86-26.34a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,224.49,128ZM128,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h72a8,8,0,0,1,0,16H48V208h72A8,8,0,0,1,128,216Z"/>
          </svg>
        </Link>
        <Link
          href={`/user/${session.user.id}`}
          className="px-4 py-2 bg-accent-muted text-white rounded cursor-pointer hover:bg-accent-muted/80 transition"
        >
          Go to Profile
        </Link>
      </div>
    </div>

      <UserProfileEditor settings={settings} availableAvatars={availableAvatars} />
    </div>
  )
}
