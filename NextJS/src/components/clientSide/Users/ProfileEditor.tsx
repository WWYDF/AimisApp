'use client'

import { useState } from 'react'
import Image from 'next/image'
import EmoticonPickerModal from './EmoticonPicker'
import DiscordAvatarWarning from './DiscordWarning'
import { User, UserSettings } from '@prisma/client'
import { getEmotePath } from '@/core/utils/pathResolver'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FloppyDisk } from 'phosphor-react'
import { useToast } from '../Toast'

type SettingsWithUser = UserSettings & {
  user: Pick<User, 'avatar' | 'displayName'>
}

const UserProfileEditor = ({ settings }: { settings: SettingsWithUser }) => {
  const [showPicker, setShowPicker] = useState(false)
  const [showDiscordWarning, setShowDiscordWarning] = useState(false)
  const [avatar, setAvatar] = useState(settings.emoteAvatar)
  const [nameOverride, setNameOverride] = useState(settings.nameOverride ?? '')
  const router = useRouter();
  const currentName = (settings.nameOverride ? settings.nameOverride : settings.user.displayName);
  const toast = useToast();

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

  const handleSaveName = async () => {
    await fetch('/api/user/settings/name', {
      method: 'POST',
      body: JSON.stringify({ name: nameOverride.trim() || null }),
      headers: { 'Content-Type': 'application/json' },
    })
  
    toast('Updated Username!')
    router.refresh()
  }

  return (
    <div className="space-y-4">
      
      {/* Avatar Settings */}
      <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
        <h2 className="text-lg font-bold text-white">Avatar</h2>
        <p className="text-sm text-gray-400 mb-2">Choose how your avatar appears on the site.</p>

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
              className="bg-gray-700 hover:bg-gray-600 transition cursor-pointer text-white px-3 py-1 rounded"
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

      {/* Display Name Settings */}
      <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
        <h2 className="text-lg font-bold text-white">Display Name Override</h2>
        <p className="text-sm text-gray-400 mb-2">
          Set a custom display name. Leave blank to use your default name.
        </p>

        <div className="flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => setNameOverride(e.target.value)}
            placeholder={currentName ?? 'Custom display name...'}
            className="flex-1 px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <button
            onClick={handleSaveName}
            className="p-2 bg-accent-muted text-white rounded cursor-pointer hover:bg-accent-muted/80 transition"
            title="Save"
          >
            <FloppyDisk size={20} weight="fill" />
          </button>
        </div>
      </div>


      {/* Modals */}
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
