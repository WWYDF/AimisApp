// components/ResultModal.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getCharacterPath } from '@/core/objects/characters'

interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  correct: boolean
  selected: string
  correctAnswer: string
}

export default function ResultModal({ isOpen, onClose, correct, selected, correctAnswer }: ResultModalProps) {
  const imagePath = getCharacterPath(correct ? selected : correctAnswer)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-full max-w-md text-center space-y-4 relative"
            >
              <h2 className={`text-2xl font-bold ${correct ? 'text-green-500' : 'text-red-500'}`}>
                {correct ? 'CORRECT' : 'INCORRECT'}
              </h2>

              {imagePath && (
                <div className="w-40 h-40 mx-auto relative">
                  <Image src={imagePath} alt="Character image" fill className="object-contain rounded-lg" />
                </div>
              )}

              <p className="text-lg text-white">
                {correct ? `'${selected}' was the correct answer.` : `You picked '${selected}', but the correct answer was '${correctAnswer}'.`}
              </p>

              {/* Future confetti area — will be added behind this div */}
              <div id="confetti-anchor" className="absolute inset-0 -z-10" />

              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 rounded cursor-pointer transition bg-zinc-800 hover:bg-zinc-700 border border-zinc-800 text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
