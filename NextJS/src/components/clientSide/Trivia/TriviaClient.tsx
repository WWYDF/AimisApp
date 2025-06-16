'use client'

import Image from 'next/image'
import { useState } from 'react'

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
  const [result, setResult] = useState<string | null>(null)

  const submitAnswer = async (choice: string) => {
    setSelected(choice)

    const res = await fetch('/api/trivia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: trivia.id, answer: choice }),
    })

    const data = await res.json()
    setResult(data.correct ? '✅ Correct!' : `❌ Wrong. Correct answer: ${data.correctAnswer}`)
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

      {trivia.choices?.map((choice) => (
        <button
          key={choice}
          onClick={() => submitAnswer(choice)}
          disabled={!!selected}
          className={`w-full px-4 py-2 rounded cursor-pointer border transition ${
            selected === choice
              ? result?.includes('✅') ? 'bg-green-600 border-green-700' : 'bg-red-600 border-red-700'
              : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700'
          }`}
        >
          {choice}
        </button>
      ))}

      {result && <div className="mt-6 text-lg">{result}</div>}
    </div>
  )
}
