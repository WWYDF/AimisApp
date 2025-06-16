type TriviaType = 'text' | 'multiple'

interface TriviaQuestion {
  id: number
  question: string
  type: TriviaType
  correct: string
  choices?: string[] // only present for multiple choice
  image?: string
}

export const TriviaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: 'What is the correct spelling?',
    type: 'multiple',
    correct: 'Ai.Mi',
    choices: ['A.I. Mi', 'Ai.Mi', 'AiMi', 'A.I.Mi'],
  },
  {
    id: 2,
    question: 'Who was Estelle previously in a relationship with?',
    type: 'multiple',
    correct: 'Rasmus',
    choices: ['X', 'Kai', 'Juliette', 'Rasmus'],
    image: '/i/character/timeline/Estelle.webp'
  },
]