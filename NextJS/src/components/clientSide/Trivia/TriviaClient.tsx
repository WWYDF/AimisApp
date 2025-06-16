'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ResultModal from './ResultModal'
import { useConfetti } from '@/core/hooks/confetti'

interface TriviaProps {
  trivia: {
    id: string
    question: string
    type: 'text' | 'multiple'
    choices?: string[]
    image?: string
  }
}

export default function TriviaClient({ trivia }: TriviaProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<null | {
    correct: boolean
    correctAnswer: string
  }>(null)

  const [showModal, setShowModal] = useState(false)
  const fireConfetti = useConfetti()

  const submitAnswer = async (choice: string) => {
    setSelected(choice)

    const res = await fetch('/api/trivia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: trivia.id, answer: choice }),
    })

    const data = await res.json()
    setResult({ correct: data.correct, correctAnswer: data.correctAnswer })
    setShowModal(true)

    if (data.correct) fireConfetti();
  }

  return (
    <div className="max-w-xl mx-auto mt-10 text-white text-center space-y-3">
      {trivia.image && (
        <Image
          src={trivia.image}
          alt="Trivia image"
          title={trivia.image.split('/').pop()?.split('.')[0]}
          width={400}
          height={300}
          className="mx-auto rounded-lg"
        />
      )}

      <div className="text-lg font-semibold my-6">
        <p>{trivia.question}</p>
      </div>

      {trivia.choices?.map((choice) => {
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
      />
    </div>
  )
}
