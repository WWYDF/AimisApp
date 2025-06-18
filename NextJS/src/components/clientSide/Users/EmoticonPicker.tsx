import { emoticon } from '@/core/objects/emotes'
import { getEmotePath } from '@/core/utils/resolveEmoticon'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EmoticonPickerModal = ({
  onSelect,
  onClose,
}: {
  onSelect: (name: string) => void
  onClose: () => void
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-zinc-900 p-6 rounded-xl max-w-2xl w-full space-y-4 border border-zinc-700"
      >
        <h2 className="text-xl font-bold text-white">Pick an Emoticon</h2>
        <div className="grid grid-cols-6 gap-4 max-h-[60vh] overflow-y-auto pr-1">
          {emoticon.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className="flex flex-col items-center gap-1 hover:scale-110 transition"
            >
              <Image
                src={getEmotePath(id)!}
                alt={label}
                width={64}
                height={64}
                className="rounded-xl cursor-pointer"
                unoptimized // Required for GIFs
              />
              <span className="text-xs text-zinc-300">{label}</span>
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="text-sm text-zinc-400 hover:text-white cursor-pointer transition mt-2"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  )
}

export default EmoticonPickerModal
