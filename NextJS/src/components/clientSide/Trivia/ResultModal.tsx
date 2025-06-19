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
  onContinue: () => void
  onStop: () => void
  isFinal: boolean
  points: number
}

export default function ResultModal({
  isOpen,
  onClose,
  correct,
  selected,
  correctAnswer,
  onContinue,
  onStop,
  isFinal,
  points
}: ResultModalProps) {
  const cleanedName = (correct ? selected : correctAnswer).replace(/ Affinity$/, '');
  const imagePath = getCharacterPath(cleanedName);

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
              <div className="flex flex-col items-center">
                <h2 className={`text-2xl font-bold ${correct ? 'text-green-500' : 'text-red-500'}`}>
                  {correct ? 'CORRECT' : 'INCORRECT'}
                </h2>

                <motion.p
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`text-sm font-medium ${
                    points > 0
                      ? 'text-green-400'
                      : points < 0
                      ? 'text-red-400'
                      : 'text-zinc-400'
                  }`}
                >
                  ({points === 0 ? `0 points` : `${points > 0 ? `+${points}` : points} points`})
                </motion.p>
              </div>

              {imagePath && (
                <div className="w-40 h-40 mx-auto relative">
                  <Image src={imagePath} alt="Character image" fill className="object-contain rounded-lg" />
                </div>
              )}

              <p className="text-lg text-zinc-400 whitespace-pre-line">
                {correct ? (
                  <>
                    <a className='font-bold text-green-400'>'{selected}'</a> <br />
                    <i>...was the right answer.</i>
                  </>
                ) : (
                  <>
                    You picked <br />
                    <a className='font-bold text-red-400'>{selected}</a> <br /><br />
                    But the correct answer was<br />
                    <a className='font-bold text-green-400'>{correctAnswer}</a>.
                  </>
                )}
              </p>

              {/* Button area */}
              <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={isFinal ? onContinue : onStop}
                className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer text-white"
              >
                {isFinal ? 'Claim Rewards' : 'Close'}
              </button>
                {correct && !isFinal && (
                  <button
                    onClick={onContinue}
                    className="px-4 py-2 rounded bg-green-700 border border-green-800 hover:bg-green-600 transition cursor-pointer text-white"
                  >
                    Double or Negative
                  </button>
                )}
              </div>

              {/* Confetti layer */}
              <div id="confetti-anchor" className="absolute inset-0 -z-10" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
