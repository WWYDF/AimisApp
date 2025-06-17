'use client'

import Image from 'next/image'
import { useState } from 'react'
import ResultModal from './ResultModal'
import { useConfetti } from '@/core/hooks/confetti'
import { useToast } from '../Toast'

interface TriviaEntry {
  id: number
  question: string
  type: 'boolean' | 'multiple'
  choices: string[]
  image?: string
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
  }>(null)
  const [showModal, setShowModal] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const toast = useToast()
  const fireConfetti = useConfetti()
  const currentQuestion = triviaList[questionIndex]

  const submitAnswer = async (choice: string) => {
    if (!currentQuestion) return

    setSelected(choice)

    const res = await fetch('/api/trivia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: currentQuestion.id, answer: choice, continue: true }),
    })

    if (res.status === 409) {
      toast('You have already attempted this today!', 'error')
      setSelected(null)
      return
    }

    const data = await res.json()
    setResult({ correct: data.correct, correctAnswer: data.correctAnswer })
    setShowModal(true)

    if (data.correct) fireConfetti()
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
    setShowModal(false)
  }
  

  if (gameOver) {
    return (
      <div className="max-w-xl mx-auto mt-10 text-white text-center">
        <h1 className="text-2xl font-bold text-red-400">Game Over</h1>
        <p className="text-lg mt-4">You finished with {questionIndex} correct answer{questionIndex !== 1 ? 's' : ''}!</p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto mt-10 text-white text-center space-y-4">
      {currentQuestion.image && (
        <Image
          src={currentQuestion.image}
          alt="Trivia image"
          width={400}
          height={300}
          className="mx-auto rounded-lg"
        />
      )}

      <div className="text-lg font-semibold my-6">
        <p>{currentQuestion.question}</p>
      </div>

      {currentQuestion.choices.map((choice) => {
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
            key={choice}
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
      />
    </div>
  )
}
