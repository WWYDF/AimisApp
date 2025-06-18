import { motion } from 'framer-motion'

const DiscordAvatarWarning = ({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-zinc-900 p-6 rounded-xl max-w-sm w-full space-y-4 border border-red-500"
      >
        <h2 className="text-xl font-bold text-red-400">Warning</h2>
        <p className="text-sm text-zinc-300">
          If your Discord avatar is inappropriate, your account may be <strong className="text-red-400">shadowbanned</strong> without warning.
        </p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 text-sm bg-zinc-700 hover:bg-zinc-600 cursor-pointer transition rounded text-white">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-3 py-1 text-sm bg-red-600 hover:bg-red-500 cursor-pointer transition rounded text-white">
            Proceed
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default DiscordAvatarWarning
