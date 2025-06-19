'use client'

import { useState } from 'react'
import Image from 'next/image'
import EmoticonPickerModal from './EmoticonPicker'
import DiscordAvatarWarning from './DiscordWarning'
import { User, UserSettings } from '@prisma/client'
import { getEmotePath } from '@/core/utils/pathResolver'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

type SettingsWithUser = UserSettings & {
  user: Pick<User, 'avatar'>
}

const UserProfileEditor = ({ settings }: { settings: SettingsWithUser }) => {
  const [showPicker, setShowPicker] = useState(false)
  const [showDiscordWarning, setShowDiscordWarning] = useState(false)
  const [avatar, setAvatar] = useState(settings.emoteAvatar)

  const handleSaveAvatar = async (newAvatar: string | null) => {
    setAvatar(newAvatar)
    setShowPicker(false)
    setShowDiscordWarning(false)

    await fetch('/api/user/settings/avatar', {
      method: 'POST',
      body: JSON.stringify({ avatar: newAvatar }),
      headers: { 'Content-Type': 'application/json' },
    })

    window.location.reload();
  }

  return (
    <div className="space-y-4">
      <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
        <h2 className="text-lg font-bold text-white">Avatar</h2>
        <p className="text-sm text-zinc-400 mb-2">Choose how your avatar appears on the site.</p>

        <div className="flex items-center gap-4">
          <Image
            src={getEmotePath(avatar) ?? settings.user.avatar!}
            alt="Avatar"
            title={avatar ?? ''}
            width={64}
            height={64}
            className="rounded-xl"
            unoptimized // Required for Discord GIFs
          />

          <div className="flex gap-2">
            <button
              className="bg-zinc-700 hover:bg-zinc-600 transition cursor-pointer text-white px-3 py-1 rounded"
              onClick={() => setShowPicker(true)}
            >
              Choose Emoticon
            </button>
            <button
              className="bg-red-700 hover:bg-red-600 transition cursor-pointer text-white px-3 py-1 rounded"
              onClick={() => setShowDiscordWarning(true)}
            >
              Use Discord
            </button>
          </div>
        </div>
      </div>

      {showPicker && 
        <AnimatePresence>
          <EmoticonPickerModal onSelect={handleSaveAvatar} onClose={() => setShowPicker(false)} />
        </AnimatePresence>
      }
      {showDiscordWarning && (
        <AnimatePresence>
          <DiscordAvatarWarning onConfirm={() => handleSaveAvatar(null)} onClose={() => setShowDiscordWarning(false)} />
        </AnimatePresence>
      )}
    </div>
  )
}

export default UserProfileEditor
