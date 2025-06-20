'use client'

import Image from 'next/image'
import { useState } from 'react'
import ResultModal from './ResultModal'
import { fullPageConfetti, useConfetti } from '@/core/hooks/confetti'
import { useToast } from '../Toast'
import { motion, AnimatePresence } from 'framer-motion'
import { usePlausible } from 'next-plausible'

interface TriviaEntry {
  id: number
  question: string
  type: 'boolean' | 'multiple'
  choices: string[]
  image?: string
  hint?: boolean
}

interface TriviaClientProps {
  triviaList: TriviaEntry[]
  initialIndex?: number
}

export default function TriviaClient({ triviaList, initialIndex }: TriviaClientProps) {
  const [questionIndex, setQuestionIndex] = useState(initialIndex ?? 0)
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<null | {
    correct: boolean
    correctAnswer: string
    points: number
  }>(null)
  const [showModal, setShowModal] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [hasViewedHint, setHasViewedHint] = useState(false)
  const [showHintModal, setShowHintModal] = useState(false)
  const [gameWon, setWin] = useState(false)

  const toast = useToast()
  const fireConfetti = useConfetti()
  const fireWinConfetti = fullPageConfetti()
  const currentQuestion = triviaList[questionIndex]
  const plausible = usePlausible()

  const submitAnswer = async (choice: string) => {
    if (!currentQuestion) return
    plausible('TriviaGuess')

    setSelected(choice)

    const res = await fetch('/api/trivia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: currentQuestion.id, answer: choice, usedHint: hasViewedHint }),
    })

    if (res.status === 409) {
      toast('You have already attempted this today!', 'error')
      setSelected(null)
      return
    }

    const data = await res.json()
    setResult({ correct: data.correct, correctAnswer: data.correctAnswer, points: data.points })
    setShowModal(true)
    setHasViewedHint(false)

    if (data.correct) {
      plausible('TriviaCorrect')
      fireConfetti()
      console.log(questionIndex);
      if (questionIndex + 1 === 5) { setWin(true) }
    }
  }

  const handleNext = () => {
    if (questionIndex + 1 >= triviaList.length) {
      setGameOver(true)
      return
    }

    setQuestionIndex((prev) => prev + 1)
    setSelected(null)
    setResult(null)
    setShowModal(false)
  }

  const handleStop = () => {
    console.log(1)
    setShowModal(false)
  }

  async function submitHintView() {
    if (!currentQuestion) return
  
    await fetch('/api/trivia/hint', {
      method: 'POST',
      body: JSON.stringify({
        questionId: currentQuestion.id,
      }),
    })
  
    setHasViewedHint(true)
    setShowHintModal(false)
  }
  

  if (gameOver) {
    if (gameWon) { fireWinConfetti() }

    return (
      <div className="max-w-xl mx-auto mt-10 text-white text-center space-y-4">
        <h1 className={`text-3xl font-bold ${gameWon ? 'text-green-400' : 'text-red-400'}`}>
          {gameWon ? '🎉 You Won!' : 'Game Over'}
        </h1>
        <p className="text-lg">
          You answered{gameWon ? ' all' : ''} {questionIndex + 1} question{questionIndex !== 1 ? 's' : ''}{gameWon ? ' successfully' : ''}!
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-sm md:max-w-xl mx-auto mt-10 text-white text-center space-y-4">
      {currentQuestion.image && currentQuestion.hint && !hasViewedHint ? (
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg">
            <button
              onClick={() => setShowHintModal(true)}
              className="bg-accent/80 hover:bg-accent/60 transition cursor-pointer px-4 py-2 rounded font-semibold"
            >
              Show Hint
            </button>
          </div>
        </div>
      ) : currentQuestion.image ? (
        <Image
          src={currentQuestion.image}
          alt="Trivia image"
          width={400}
          height={300}
          className="mx-auto rounded-lg"
        />
      ) : null}

      <div className="text-lg font-semibold my-6">
        <p>{currentQuestion.question}</p>
      </div>

      {currentQuestion.choices.map((choice, index) => {
        const isSelected = selected === choice
        const isCorrect = result?.correctAnswer === choice

        let buttonClass = 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700'

        if (result) {
          if (isSelected) {
            buttonClass = result.correct
              ? 'bg-green-600 border-green-700'
              : 'bg-red-600 border-red-700'
          } else if (isCorrect) {
            buttonClass = 'bg-green-600 border-green-700'
          }
        }

        return (
          <button
            key={`${choice}-${index}`}
            onClick={() => submitAnswer(choice)}
            disabled={!!selected}
            className={`w-full px-4 py-2 rounded cursor-pointer border transition ${buttonClass}`}
          >
            {choice}
          </button>
        )
      })}

      <ResultModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        correct={result?.correct ?? false}
        selected={selected ?? ''}
        correctAnswer={result?.correctAnswer ?? ''}
        onContinue={handleNext}
        onStop={handleStop}
        isFinal={questionIndex === triviaList.length - 1}
        points={result?.points ?? 0} // Shouldn't really ever be 0 though
      />


      <AnimatePresence>
        {showHintModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/60 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 text-white p-6 rounded-lg max-w-sm text-center space-y-4 border-2 border-zinc-800"
            >
              <h2 className="text-xl font-bold text-accent">Reveal Hint?</h2>
              <p className="text-sm text-zinc-300">
                Viewing this hint will reduce your maximum possible points by <strong>75%</strong> for this question. <br /><br />
                <a className='text-red-400'>Penalties will remain unaffected.</a>
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={submitHintView}
                  className="px-4 py-2 bg-accent/80 hover:bg-accent/60 transition cursor-pointer rounded font-medium"
                >
                  Reveal
                </button>
                <button
                  onClick={() => setShowHintModal(false)}
                  className="px-4 py-2 bg-zinc-600 hover:bg-zinc-700 transition cursor-pointer rounded font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
